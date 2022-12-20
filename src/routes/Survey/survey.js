import { Router } from 'express'
import SurveysController from '../../controllers/Survey/SurveysController'
import validate from '../../middlewares/validate'
import { createValidation } from '../../validations/Survey/Survey'

const router = Router()
const controller = new SurveysController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.route('/').post(validate(createValidation), controller.insert)

export default router
