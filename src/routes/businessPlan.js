import { Router } from 'express'
import BusinessPlansController from '../controllers/BusinessPlansController'
import validate from '../middlewares/validate'
import { completeValidation, createValidation } from '../validations/BusinessPlan'

const router = Router()
const controller = new BusinessPlansController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.route('/').post(validate(createValidation), controller.insert)
router.route('/complete').post(validate(completeValidation), controller.complete)

export default router
