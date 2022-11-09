import BaseService from './BaseService'
import UserRole from '../models/strategicPlan/UserRole'

export default class UserRoleService extends BaseService {
  constructor() {
    super(UserRole)
  }
}
