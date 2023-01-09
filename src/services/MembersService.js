import BaseService from './BaseService'
import Member from '../models/strategicPlan/Member'

export default class BusinessPlanProofService extends BaseService {
  constructor() {
    super(Member)
  }
}
