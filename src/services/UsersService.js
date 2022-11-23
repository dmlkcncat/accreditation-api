import BaseService from './BaseService'
import User from '../models/strategicPlan/User'

export default class UserService extends BaseService {
  constructor() {
    super(User)
  }
  list(where = {}) {
    return this.model.find(where).populate({
      path: 'userRole',
    })
  }

  get(where = {}) {
    return this.model.findOne(where).populate('userRole')
  }
}
