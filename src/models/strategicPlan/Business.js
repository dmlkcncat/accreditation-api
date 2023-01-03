import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    // activity: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'strategic-activities',
    // },
    period: {
      type: Schema.Types.ObjectId,
      ref: 'strategic-periods',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('business', schema)
