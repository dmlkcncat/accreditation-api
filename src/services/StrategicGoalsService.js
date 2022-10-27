import BaseService from './BaseService'
import StrategicGoal from '../models/strategicPlan/StrategicGoal'
import StrategicPlan from '../models/strategicPlan/StrategicPlan'

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

  async insert(data) {
    const strategicPlanId = data.strategicPlan

    const existingStrategicPlan = await StrategicPlan.findById(strategicPlanId)

    const goal = await this.model(data).save()

    existingStrategicPlan.strategicGoals.push(goal)
    await existingStrategicPlan.save()

    return goal
  }
}
