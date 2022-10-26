import BaseService from './BaseService'
import StrategicActivity from '../models/StrategicActivity/StrategicActivity'

export default class StrategicActivityService extends BaseService {
  constructor() {
    super(StrategicActivity)
  }
}
