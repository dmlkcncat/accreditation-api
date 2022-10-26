import BaseService from './BaseService'
import StrategicGoal from '../models/strategicPlan/StrategicGoal'

export default class StrategicGoalService extends BaseService {
  constructor() {
    super(StrategicGoal)
  }

  list(where = {}) {
    return this.model.find(where).populate({
      path: 'strategicActivities',
      populate: {
        path: 'strategic-activities',
      },
    })
  }
  get(where = {}) {
    return this.model.findOne(where).populate({
      path: 'strategicActivities',
      populate: {
        path: 'strategic-activities',
      },
    })
  }
}
