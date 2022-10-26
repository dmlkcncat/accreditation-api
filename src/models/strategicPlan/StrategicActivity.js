import { Schema, model } from 'mongoose'
//Faaliyet
const schema = new Schema(
  {
    title: String,
    activityGoal: Number,
    performanceIndicator: String,
    responsible: String,
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
