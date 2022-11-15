import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    title: String,
    period: [
      {
        type: Schema.Types.ObjectId,
        ref: 'strategic-periods',
      },
    ],
    strategicPlans: [
      {
        type: Schema.Types.ObjectId,
        ref: 'strategic-plans',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('strategic-system', schema)
