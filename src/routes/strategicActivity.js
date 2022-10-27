import { Router } from 'express'
import StrategicActivitiesController from '../controllers/StrategicActivitiesController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/StrategicActivities'

const router = Router()
const controller = new StrategicActivitiesController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.route('/').post(validate(createValidation), controller.insert)

export default router
