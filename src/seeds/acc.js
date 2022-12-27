import Accreditation from '../models/strategicPlan/Accreditation'
import rawData from './accRawData.json'

/**
 *
 * @param {Array} accList
 * @param {*} parentId
 */
const nestedInsert = async (accList = rawData, parentId = null) => {
  for await (const acc of accList) {
    const newAcc = new Accreditation({ title: acc.title, parent: parentId })
    await newAcc.save()

    if ('children' in acc) {
      await nestedInsert(acc.children, newAcc._id)
    }
  }
}

export default nestedInsert
