import BaseController from './BaseController'
import BusinessPlansService from '../services/BusinessPlansService'

export default class BusinessPlansController extends BaseController {
  constructor() {
    super(new BusinessPlansService())
  }

  list = (req, res, next) => {
    const filter = {}

    if (req.query?.period) filter.period = req.query?.period

    if (req.query?.activity) filter.activity = req.query?.activity

    this.service
      .list(filter)
      .then((response) => res.status(200).send(response))
      .catch(next)
  }
}
