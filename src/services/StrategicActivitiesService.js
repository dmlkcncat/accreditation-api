import BaseService from './BaseService'
import StrategicActivity from '../models/strategicPlan/StrategicActivity'

export default class StrategicActivitiesService extends BaseService {
  constructor() {
    super(StrategicActivity)
  }
}
