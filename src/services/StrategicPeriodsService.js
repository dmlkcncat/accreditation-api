import BaseService from './BaseService'
import StrategicPeriod from '../models/strategicPlan/StrategicPeriod'

export default class StrategicPeriodService extends BaseService {
  constructor() {
    super(StrategicPeriod)
  }
}
