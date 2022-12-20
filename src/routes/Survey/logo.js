import { Router } from 'express'
import LogosController from '../../controllers/Survey/LogosController'
import validate from '../../middlewares/validate'
import { createValidationBody, createValidationFile } from '../../validations/Survey/logo'

const router = Router()
const controller = new LogosController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router
  .route('/')
  .post(validate(createValidationBody), validate(createValidationFile, 'files'), controller.insert)

export default router
