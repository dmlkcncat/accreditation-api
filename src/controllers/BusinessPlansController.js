import BaseController from './BaseController'
import BusinessPlansService from '../services/BusinessPlansService'

export default class BusinessPlansController extends BaseController {
  constructor() {
    super(new BusinessPlansService())
  }
}
