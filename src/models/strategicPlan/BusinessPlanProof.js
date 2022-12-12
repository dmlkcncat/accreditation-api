import { Schema, model } from 'mongoose'
import BusinessPlan from './BusinessPlan'
//Kanıt
const schema = new Schema(
  {
    description: String,
    path: [String],
    businessPlan: {
      type: Schema.Types.ObjectId,
      ref: 'business-plan',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

schema.post('save', async (doc, next) => {
  await BusinessPlan.findByIdAndUpdate(doc.businessPlan, {
    proof: doc._id,
  })

  next()
})

export default model('business-plan-proof', schema)
