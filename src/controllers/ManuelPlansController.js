import BaseController from './BaseController'
import ManuelPlansService from '../services/ManuelPlansService'

export default class ManuelPlansController extends BaseController {
  constructor() {
    super(new ManuelPlansService())
  }
}
