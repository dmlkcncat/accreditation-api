import BaseController from './BaseController'
import AccreditationsService from '../services/AccreditationsService'

export default class AccreditationsController extends BaseController {
  constructor() {
    super(new AccreditationsService())
  }

  nestedList = (req, res, next) => {
    this.service
      .nestedList()
      .then((response) => res.status(200).send(response))
      .catch(next)
  }

  addBusinessPlan = (req, res, next) => {
    const { businessPlanId, accreditationIdList } = req.body
    console.log('controller body', req.body)
    this.service
      .addBusinessPlan(businessPlanId, accreditationIdList)
      .then((response) => res.status(200).send(response))
      .catch(next)
  }
}
