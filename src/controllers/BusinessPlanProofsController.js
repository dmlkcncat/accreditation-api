import BaseController from './BaseController'
import BusinessPlanProofService from '../services/BusinessPlanProofService'
import uploadFile from '../scripts/utils/uploadFile'
import { castArray } from '../scripts/utils/helper'

export default class BusinessPlanProofController extends BaseController {
  constructor() {
    super(new BusinessPlanProofService())
  }

  insert = async (req, res, next) => {
    const files = castArray(req.files.fileList)

    const filePathList = await Promise.all(files.map(async (file) => await uploadFile(file)))

    const data = { ...req.body, path: filePathList }

    this.service
      .insert(data)
      .then((response) => res.status(201).send(response))
      .catch(next)
  }
}
