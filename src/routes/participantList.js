import { Router } from 'express'
import ParticipantListController from '../controllers/ParticipantListController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/ParticipantList'

const router = Router()
const controller = new ParticipantListController()

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.route('/').post(validate(createValidation), controller.insert)

export default router
