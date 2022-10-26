import BaseController from './BaseController'
import StrategicGoalsService from '../services/StrategicGoalsService'

export default class StrategicGoalsController extends BaseController {
  constructor() {
    super(new StrategicGoalsService())
  }
}
