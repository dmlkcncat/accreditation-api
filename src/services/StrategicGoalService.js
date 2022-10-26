import BaseService from './BaseService'
import StrategicGoal from '../models/strategicPlan/StrategicGoal'

export default class StrategicPlanService extends BaseService {
  constructor() {
    super(StrategicGoal)
  }
}
