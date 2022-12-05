import SurveysService from '../../services/Survey/SurveysService'
import BaseController from '../BaseController'

export default class SurveysController extends BaseController {
  constructor() {
    super(new SurveysService())
  }
}
