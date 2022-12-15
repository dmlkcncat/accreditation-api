import BaseController from './BaseController'
import AccreditationsService from '../services/AccreditationsService'

export default class AccreditationsController extends BaseController {
  constructor() {
    super(new AccreditationsService())
  }
}
