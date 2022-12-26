import Accreditation from '../models/strategicPlan/Accreditation'
import rawData from './accRawData.json'

export default async () => await Accreditation.insertMany(rawData)
