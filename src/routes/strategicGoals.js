import { Router } from 'express'
import StrategicGoalsController from '../controllers/StrategicGoalsController'

const router = Router()
const controller = new StrategicGoalsController()

router.get('/', controller.list)
router.get('/:id', controller.getById)

export default router
