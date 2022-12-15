import BaseService from './BaseService'
import Accreditation from '../models/strategicPlan/Accreditation'

export default class AddreditationsService extends BaseService {
  constructor() {
    super(Accreditation)
  }
}
