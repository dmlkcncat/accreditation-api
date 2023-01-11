import BaseService from './BaseService'
import ParticipantList from '../models/strategicPlan/ParticipantList'

export default class BusinessPlanProofService extends BaseService {
  constructor() {
    super(ParticipantList)
  }

  get(where = {}) {
    return this.model
      .findOne(where)
      .populate({
        path: 'participantList.participant',
      })
      .populate('businessPlan')
  }
}
