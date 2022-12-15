import { Router } from 'express'

import StrategicPlansRoutes from './StrategicPlan'
import StrategicPeriodsRoutes from './strategicPeriods'
import StrategicGoalsRoutes from './strategicGoals'
import StrategicActivityRoutes from './strategicActivity'
import UserRoleRoutes from './userRole'
import UserRoutes from './user'
import StrategicSystem from './StrategicSystem'
import BusinessPlanRoutes from './BusinessPlan'
import ManuelPlanRoutes from './manuelPlan'
import Ping from './ping'
import { authenticateToken } from '../middlewares/authenticate'
import SurveyRoutes from './Survey/survey'
import BusinessPlanProofRoutes from './BusinessPlanProof'
import AccreditationRoutes from './Accreditation'

const router = Router()

router.use('/strategic-plans', authenticateToken, StrategicPlansRoutes)
router.use('/strategic-periods', authenticateToken, StrategicPeriodsRoutes)
router.use('/strategic-goals', authenticateToken, StrategicGoalsRoutes)
router.use('/strategic-activity', authenticateToken, StrategicActivityRoutes)
router.use('/user-role', authenticateToken, UserRoleRoutes)
router.use('/business-plans', BusinessPlanRoutes)
router.use('/manuel-plans', ManuelPlanRoutes)
router.use('/user', UserRoutes)
router.use('/strategic-system', authenticateToken, StrategicSystem)
router.use('/surveys', SurveyRoutes)
router.use('/business-plan-proof', authenticateToken, BusinessPlanProofRoutes)
router.use('/accreditation', AccreditationRoutes)

router.use('/ping', authenticateToken, Ping)
export default router
