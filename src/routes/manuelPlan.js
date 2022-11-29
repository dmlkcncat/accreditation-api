import { Router } from 'express'
import ManuelPlansController from '../controllers/ManuelPlansController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/ManuelPlan'

const router = Router()
const controller = new ManuelPlansController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.route('/').post(validate(createValidation), controller.insert)

export default router
