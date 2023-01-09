import BaseController from './BaseController'
import MembersService from '../services/MembersService'

export default class MembersController extends BaseController {
  constructor() {
    super(new MembersService())
  }
}
