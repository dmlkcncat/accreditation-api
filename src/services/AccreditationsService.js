import BaseService from './BaseService'
import Accreditation from '../models/strategicPlan/Accreditation'

export default class AddreditationsService extends BaseService {
  constructor() {
    super(Accreditation)
  }

  async list(where = {}) {
    const list = await this.model.find(where)

    return this.nestedItems(list)
  }

  nestedItems(items, parentId = null) {
    const itemList = []
    let item
    if (parentId == null) {
      item = items.filter((x) => x.parent == null)
    } else {
      item = items.filter((x) => String(x.parent) == String(parentId))
    }

    for (let x of item) {
      itemList.push({
        _id: x._id,
        title: x.title,
        children: this.nestedItems(items, x._id),
      })
    }
    return itemList
  }
}
