import { Router } from 'express'
import UsersController from '../controllers/UsersController'
import { authenticateToken } from '../middlewares/authenticate'
import validate from '../middlewares/validate'
import { createValidation, loginValidation } from '../validations/User'

const router = Router()
const controller = new UsersController()

router.route('/').get(authenticateToken, controller.list)
// router.route('/').post(controller.insert)
router.route('/').post(validate(createValidation), controller.insert)
router.route('/login').post(validate(loginValidation), controller.login)

export default router
