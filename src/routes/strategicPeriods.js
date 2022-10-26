import { Router } from 'express'
import StrategicPeriodsController from '../controllers/StrategicPeriodsController'

const router = Router()
const controller = new StrategicPeriodsController()

router.get('/', controller.list)
router.get('/:id', controller.getById)

export default router
