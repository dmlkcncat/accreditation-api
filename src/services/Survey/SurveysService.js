import Survey from '../../models/survey/Survey'
import BaseService from '../BaseService'

export default class SurveysService extends BaseService {
  constructor() {
    super(Survey)
  }
}
