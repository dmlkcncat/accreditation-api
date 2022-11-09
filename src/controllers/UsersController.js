import BaseController from './BaseController'
import UsersService from '../services/UsersService'

export default class UsersController extends BaseController {
  constructor() {
    super(new UsersService())
  }
  list = (req, res, next) => {
    const where = {}
    if (req.query?.role) {
      where.userRole = req.query.role
    }
    this.service
      .list(where)
      .then((response) => res.status(200).send(response))
      .catch(next)
  }
}
