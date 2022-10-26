import { Router } from 'express'

import StrategicPlansRoutes from './StrategicPlan'
import StrategicPeriodsRoutes from './strategicPeriods'

const router = Router()

router.use('/strategic-plans', StrategicPlansRoutes)
router.use('/strategic-periods', StrategicPeriodsRoutes)

export default router
