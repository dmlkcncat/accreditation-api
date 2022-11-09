import { Router } from 'express'
import UserRolesController from '../controllers/UserRoleController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/UserRoles'

const router = Router()
const controller = new UserRolesController()

router.get('/', controller.list)
// router.route('/').post(controller.insert)
router.route('/').post(validate(createValidation), controller.insert)

export default router
