import BaseService from './BaseService'
import ManuelPlan from '../models/strategicPlan/ManuelPlan'

export default class ManuelPlansService extends BaseService {
  constructor() {
    super(ManuelPlan)
  }
}
