import { Router } from 'express'
import BusinessPlanProofsController from '../controllers/BusinessPlanProofsController'
import { authenticateToken } from '../middlewares/authenticate'
import validate from '../middlewares/validate'
import { createValidationBody, createValidationFile } from '../validations/BusinessPlanProof'

const router = Router()
const controller = new BusinessPlanProofsController()

router.route('/').post(controller.insert)

export default router
