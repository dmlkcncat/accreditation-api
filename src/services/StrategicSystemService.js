import BaseService from './BaseService'
import StrategicSystem from '../models/strategicPlan/StrategicSystem'
import StrategicPeriod from '../models/strategicPlan/StrategicPeriod'
import mongoose from 'mongoose'

export default class StrategiSystemService extends BaseService {
  constructor() {
    super(StrategicSystem)
  }

  async insert(data) {
    const { periodStartYear } = data

    const systemId = mongoose.Types.ObjectId()

    const periods = []
    for (let i = 0; i < 4; i++) {
      periods.push(
        new StrategicPeriod({
          year: periodStartYear + i,
          strategicSystem: systemId,
        })
      )
    }
    const strategicPeriods = await StrategicPeriod.insertMany(periods)
    const title = `${periods.at(0).year} - ${periods.at(-1).year}`

    return this.model({ _id: systemId, title, period: strategicPeriods }).save()
  }

  get(where = {}) {
    return this.model
      .findOne(where)
      .populate('period')
      .populate({
        path: 'strategicPlans',
        populate: {
          path: 'strategicGoals',
          populate: {
            path: 'strategicActivities',
            populate: {
              path: 'periodGoal',
              populate: {
                path: 'strategicPeriod',
              },
            },
          },
        },
      })
  }
}
