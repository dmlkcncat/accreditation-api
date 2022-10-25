import { Schema, model } from 'mongoose'
//Amaç
const schema = new Schema(
  {
    title: String,
    period: [
      {
        type: Schema.Types.ObjectId,
        ref: 'strategic-periods',
      },
    ],
    strategicGoals: [
      {
        type: Schema.Types.ObjectId,
        ref: 'strategic-goals',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('strategic-plans', schema)
