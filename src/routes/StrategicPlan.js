import { Router } from 'express'
import StrategicPlanController from '../controllers/StrategicPlansController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/StategicPlans'

const router = Router()
const controller = new StrategicPlanController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.get('/:id/export', controller.export)
router.route('/').post(validate(createValidation), controller.insert)

export default router
