import BaseController from './BaseController'
import StrategicSystemService from '../services/StrategicSystemService'

export default class StrategicSystemController extends BaseController {
  constructor() {
    super(new StrategicSystemService())
  }
}
