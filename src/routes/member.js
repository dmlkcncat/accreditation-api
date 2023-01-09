import { Router } from 'express'
import MembersController from '../controllers/MembersController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/Member'

const router = Router()
const controller = new MembersController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.route('/').post(validate(createValidation), controller.insert)

export default router
