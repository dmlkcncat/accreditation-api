import BaseService from './BaseService'
import ParticipantList from '../models/strategicPlan/ParticipantList'

export default class BusinessPlanProofService extends BaseService {
  constructor() {
    super(ParticipantList)
  }
}
