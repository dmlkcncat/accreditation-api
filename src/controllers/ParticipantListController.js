import BaseController from './BaseController'
import ParticipantListService from '../services/ParticipantListService'

export default class ParticipantListController extends BaseController {
  constructor() {
    super(new ParticipantListService())
  }
}
