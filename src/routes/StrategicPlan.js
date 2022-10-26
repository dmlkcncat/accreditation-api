import { Router } from 'express'
import StrategicPlanController from '../controllers/StrategicPlansController'

const router = Router()
const controller = new StrategicPlanController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.post('/', controller.insert)

export default router
