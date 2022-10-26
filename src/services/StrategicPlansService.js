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
          path: 'strategic-goals',
        },
      })
      .populate({
        path: 'period',
      })
  }

  get(where = {}) {
    return this.model
      .findOne(where)
      .populate({
        path: 'strategicGoals',
        populate: {
          path: 'strategic-goals',
        },
      })
      .populate({
        path: 'period',
      })
  }
}
