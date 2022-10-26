import BaseController from './BaseController'
import StrategicPlansService from '../services/StrategicPlansService'

export default class StrategicPlansController extends BaseController {
  constructor() {
    super(new StrategicPlansService())
  }
}
