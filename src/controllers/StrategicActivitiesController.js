import BaseController from './BaseController'
import StrategicActivitiesService from '../services/StrategicActivitiesService'

export default class StrategicActivitiesController extends BaseController {
  constructor() {
    super(new StrategicActivitiesService())
  }
}
