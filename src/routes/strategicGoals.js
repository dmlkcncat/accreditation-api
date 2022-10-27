import { Router } from 'express'
import StrategicGoalsController from '../controllers/StrategicGoalsController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/StrategicGoals'

const router = Router()
const controller = new StrategicGoalsController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.route('/').post(validate(createValidation), controller.insert)

export default router
