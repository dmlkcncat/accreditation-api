import BaseController from './BaseController'
import UserRolesService from '../services/UserRolesService'

export default class UserRolesController extends BaseController {
  constructor() {
    super(new UserRolesService())
  }
}
