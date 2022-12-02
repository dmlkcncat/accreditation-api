import BaseService from './BaseService'
import ManuelPlan from '../models/strategicPlan/ManuelPlan'

export default class ManuelPlansService extends BaseService {
  constructor() {
    super(ManuelPlan)
  }
  list(where = {}) {
    return this.model.find(where).populate({
      path: 'responsible',
    })
  }
  get(where = {}) {
    return this.model.findOne(where).populate({
      path: 'responsible',
    })
  }
}
