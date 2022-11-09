import { Router } from 'express'

import StrategicPlansRoutes from './StrategicPlan'
import StrategicPeriodsRoutes from './strategicPeriods'
import StrategicGoalsRoutes from './strategicGoals'
import StrategicActivityRoutes from './strategicActivity'
import UserRoleRoutes from './userRole'
import UserRoutes from './user'

const router = Router()

router.use('/strategic-plans', StrategicPlansRoutes)
router.use('/strategic-periods', StrategicPeriodsRoutes)
router.use('/strategic-goals', StrategicGoalsRoutes)
router.use('/strategic-activity', StrategicActivityRoutes)
router.use('/user-role', UserRoleRoutes)
router.use('/user', UserRoutes)

export default router
