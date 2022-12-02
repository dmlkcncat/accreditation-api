import BaseService from './BaseService'
import BusinessPlan from '../models/strategicPlan/BusinessPlan'

export default class BusinessPlanService extends BaseService {
  constructor() {
    super(BusinessPlan)
  }
  list(where = {}) {
    return this.model
      .find(where)
      .populate({
        path: 'activity',
      })
      .populate({
        path: 'responsible',
      })
  }
  get(where = {}) {
    return this.model
      .findOne(where)
      .populate({
        path: 'activity',
      })
      .populate({
        path: 'responsible',
      })
  }
}
