import { Router } from 'express'

import StrategicPlansRoutes from './StrategicPlan'
import StrategicPeriodsRoutes from './strategicPeriods'
import StrategicGoalsRoutes from './strategicGoals'
import StrategicActivityRoutes from './strategicActivity'
import UserRoleRoutes from './userRole'
import UserRoutes from './user'
import StrategicSystem from './StrategicSystem'
import { authenticateToken } from '../middlewares/authenticate'

const router = Router()

router.use('/strategic-plans', authenticateToken, StrategicPlansRoutes)
router.use('/strategic-periods', authenticateToken, StrategicPeriodsRoutes)
router.use('/strategic-goals', authenticateToken, StrategicGoalsRoutes)
router.use('/strategic-activity', authenticateToken, StrategicActivityRoutes)
router.use('/user-role', authenticateToken, UserRoleRoutes)
router.use('/user', UserRoutes)
router.use('/strategic-system', authenticateToken, StrategicSystem)
export default router
