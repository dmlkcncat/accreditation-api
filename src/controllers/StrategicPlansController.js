import BaseController from './BaseController'
import StrategicPlansService from '../services/StrategicPlansService'
import excelJS from 'exceljs'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import ApiError from '../errors/ApiError'
import slug from 'slug'
export default class StrategicPlansController extends BaseController {
  constructor() {
    super(new StrategicPlansService())
  }

  export = async (req, res, next) => {
    const strategicPlan = await this.service.get({ _id: req.params.id })

    const workbook = new excelJS.Workbook()
    const worksheet = workbook.addWorksheet('Worksheet 0')
    const slugStrategicPlanName = slug(strategicPlan.title + '-' + uuidv4())
    const filename = slugStrategicPlanName + '.xlsx'
    const exportPath = path.join('uploads', 'exports', filename)
    const fullPath = path.resolve(exportPath)

    worksheet.addRow([strategicPlan.title])

    const columnWidth = {
      A: 109,
      B: 233,
      C: 169,
      D: 137,
      E: 37,
      F: 37,
      G: 37,
      H: 37,
      I: 69,
    }

    Object.entries(columnWidth).forEach(([key, width]) => {
      const column = worksheet.getColumn(key)
      column.width = width / 7

      if ('EFGH'.split('').includes(key)) {
        column.alignment = {
          horizontal: 'center',
        }
      }

      column.alignment = {
        wrapText: true,
        ...column.alignment,
      }
    })

    const periods = strategicPlan.strategicSystem.period.map(({ year }) => year + '')

    strategicPlan.strategicGoals.forEach((strategicGoal) => {
      worksheet.addRow([
        'STRATEJİK HEDEF',
        strategicGoal.title,
        'PERFORMANS GÖSTERGESİ',
        'PERFORMANS HEDEFİ',
        ...periods,
        'SORUMLU',
      ])

      strategicGoal.strategicActivities.forEach((strategicActivity) => {
        const periodGoals = strategicActivity.periodGoal.map(
          ({ goal, price }) => goal + '\r\n' + price
        )

        worksheet.addRow([
          '',
          strategicActivity.title,
          strategicActivity.performanceIndicator,
          strategicActivity.performanceGoalCount,
          ...periodGoals,
          strategicActivity.responsible.fullName,
        ])
      })
    })

    worksheet.mergeCells('A1:I1')
    const cell = worksheet.getCell('A1')

    cell.style = {
      alignment: {
        horizontal: 'center',
      },
    }
    try {
      await workbook.xlsx.writeFile(fullPath).then(() => {
        res.json({ path: exportPath })
      })
    } catch (err) {
      next(new ApiError('Something went wrong'))
    }
  }
}
