import BaseService from './BaseService'
import BusinessPlan from '../models/strategicPlan/BusinessPlan'

export default class BusinessPlanService extends BaseService {
  constructor() {
    super(BusinessPlan)
  }
}
