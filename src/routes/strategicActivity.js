import { Router } from 'express'
import StrategicActivitiesController from '../controllers/StrategicActivitiesController'

const router = Router()
const controller = new StrategicActivitiesController()

router.get('/', controller.list)
router.get('/:id', controller.getById)

export default router
