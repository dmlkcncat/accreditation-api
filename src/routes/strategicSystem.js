import { Router } from 'express'
import StrategicSystemController from '../controllers/StrategicSystemController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/StrategicSystem'

const router = Router()
const controller = new StrategicSystemController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.route('/').post(validate(createValidation), controller.insert)

export default router
