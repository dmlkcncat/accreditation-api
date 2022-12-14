import BaseService from './BaseService'
import StrategicPlan from '../models/strategicPlan/StrategicPlan'

export default class StrategicPlanService extends BaseService {
  constructor() {
    super(StrategicPlan)
  }
  list(where = {}) {
    return this.model
      .find(where)
      .populate({
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
      })
      .populate({
        path: 'strategicSystem',
        populate: {
          path: 'period',
        },
      })
  }

  get(where = {}) {
    return this.model
      .findOne(where)
      .populate({
        path: 'strategicGoals',
        populate: {
          path: 'strategicActivities',
          populate: [
            {
              path: 'periodGoal',
              populate: {
                path: 'strategicPeriod',
              },
            },
            {
              path: 'responsible',
            },
          ],
        },
      })
      .populate({
        path: 'strategicSystem',
        populate: {
          path: 'period',
          select: 'year',
        },
      })
  }

  // async insert(data) {
  //   const { periodStartYear } = data
  //   const periods = []
  //   for (let i = 0; i < 4; i++) {
  //     periods.push(
  //       new StrategicPeriod({
  //         title: (periodStartYear + i).toString(),
  //       })
  //     )
  //   }
  //   const strategicPeriods = await StrategicPeriod.insertMany(periods)
  //   return this.model({ ...data, period: strategicPeriods }).save()
  // }
}
