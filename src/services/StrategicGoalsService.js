import BaseService from './BaseService'
import StrategicGoal from '../models/strategicPlan/StrategicGoal'

export default class StrategicGoalService extends BaseService {
  constructor() {
    super(StrategicGoal)
  }
}
