import { Schema, model } from 'mongoose'
//Faaliyet
const schema = new Schema(
  {
    title: String,
    activityGoal: Number,
    periodGoal: [
      {
        strategicPeriod: {
          type: Schema.Types.ObjectId,
          ref: 'strategic-periods',
        },
        goal: Number,
        price: Number,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('strategic-activities', schema)
