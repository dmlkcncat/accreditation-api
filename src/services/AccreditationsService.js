import BaseService from './BaseService'
import Accreditation from '../models/strategicPlan/Accreditation'
import BusinessPlan from '../models/strategicPlan/BusinessPlan'

export default class AddreditationsService extends BaseService {
  constructor() {
    super(Accreditation)
  }

  list(where = {}) {
    return this.model.find(where).populate({
      path: 'businessPlanList',
      populate: 'proof',
    })
  }

  async nestedList(where = {}) {
    const list = await this.list(where)

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
        ...x.toObject(),
        children: this.nestedItems(items, x._id),
      })
    }
    return itemList
  }

  async addBusinessPlan(businessPlanId, accreditationIdList) {
    await BusinessPlan.findOneAndUpdate(
      { _id: businessPlanId },
      { $push: { accreditationList: accreditationIdList } }
    )

    return this.model.updateMany(
      { _id: { $in: accreditationIdList } },
      { $push: { businessPlanList: businessPlanId } }
    )
  }
}
