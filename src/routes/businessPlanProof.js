import { Router } from 'express'
import BusinessPlanProofsController from '../controllers/BusinessPlanProofsController'
import validate from '../middlewares/validate'
import { createValidationBody, createValidationFile } from '../validations/BusinessPlanProof'

const router = Router()
const controller = new BusinessPlanProofsController()

router
  .route('/')
  .post(validate(createValidationBody), validate(createValidationFile, 'files'), controller.insert)

export default router
