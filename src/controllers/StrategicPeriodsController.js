import BaseController from './BaseController'
import StrategicPeriodsService from '../services/StrategicPeriodsService'

export default class StrategicPeriodsController extends BaseController {
  constructor() {
    super(new StrategicPeriodsService())
  }
}
