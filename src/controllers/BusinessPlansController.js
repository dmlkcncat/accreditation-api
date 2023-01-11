import BaseController from './BaseController'
import BusinessPlansService from '../services/BusinessPlansService'
import sendEmail from '../scripts/sendEmail'
import businessPlanResponsibleText from '../email/businessPlanResponsibleText'
import { dateToString } from '../scripts/utils/helper'

export default class BusinessPlansController extends BaseController {
  constructor() {
    super(new BusinessPlansService())
  }

  list = (req, res, next) => {
    const filter = {}

    if (req.query?.period) filter.period = req.query?.period

    if (req.query?.activity) filter.activity = req.query?.activity

    if (req.query?.statu) filter.statu = req.query?.statu === 'true'

    if (req.query?.fromnow) filter.date = { $gte: Date.now() }

    if (req.query?.limit) filter.limit = req.query?.limit

    this.service
      .list(filter)
      .then((response) => res.status(200).send(response))
      .catch(next)
  }

  complete = (req, res, next) => {
    const filter = {
      _id: req.body.businessPlan,
    }

    const update = {
      statu: true,
    }

    this.service
      .updateOne(filter, update)
      .then((response) => res.status(200).send(response))
      .catch(next)
  }

  insert = async (req, res, next) => {
    try {
      const response = await this.service.insert(req.body)

      const businessPlan = await this.service.get({ _id: response._id })

      businessPlan.date.setHours(...businessPlan.time.split(':'))

      await sendEmail({
        to: businessPlan.responsible.mail,
        subject: 'İş Planı Sorumlu Ataması',
        html: businessPlanResponsibleText({
          businessPlanName: businessPlan.title,
          fullName: businessPlan.responsible.fullName,
          createdAt: dateToString(businessPlan.createdAt),
          date: dateToString(businessPlan.date),
        }),
      })

      return res.status(200).send(response)
    } catch (error) {
      console.log('error is', typeof error)

      next(error)
    }
  }
}
