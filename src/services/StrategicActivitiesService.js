import BaseService from './BaseService'
import StrategicActivity from '../models/strategicPlan/StrategicActivity'
import StrategicGoal from '../models/strategicPlan/StrategicGoal'

export default class StrategicActivitiesService extends BaseService {
  constructor() {
    super(StrategicActivity)
  }

  async insert(data) {
    const strategicGoalId = data.strategicGoal

    const existingStrategicGoal = await StrategicGoal.findById(strategicGoalId)

    const activity = await this.model(data).save()

    existingStrategicGoal.strategicActivities.push(activity)
    await existingStrategicGoal.save()

    return activity
  }
}
