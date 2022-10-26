import { Router } from 'express'

import StrategicPlansRoutes from './StrategicPlan'
import StrategicPeriodsRoutes from './strategicPeriods'
import StrategicGoalsRoutes from './strategicGoals'
import StrategicActivityRoutes from './strategicActivity'

const router = Router()

router.use('/strategic-plans', StrategicPlansRoutes)
router.use('/strategic-periods', StrategicPeriodsRoutes)
router.use('/strategic-goals', StrategicGoalsRoutes)
router.use('/strategic-activity', StrategicActivityRoutes)

export default router
