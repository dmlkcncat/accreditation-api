import { Router } from 'express'

import StrategicPlansRoutes from './StrategicPlan'

const router = Router()

router.use('/strategic-plans', StrategicPlansRoutes)

export default router
