import { Router } from 'express'
import AccreditationsController from '../controllers/AccreditationsController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/Accreditation'

const router = Router()
const controller = new AccreditationsController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.route('/').post(validate(createValidation), controller.insert)

export default router
