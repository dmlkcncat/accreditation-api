import { Router } from 'express'
import validate from '../middlewares/validate'
import StrategicPlanController from '../controllers/StrategicPlansController'

const router = Router()
const controller = new StrategicPlanController()

router.get('/', controller.list)
router.get('/:id', controller.getById)

export default router
