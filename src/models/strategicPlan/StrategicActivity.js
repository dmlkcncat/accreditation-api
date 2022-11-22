import { Schema, model } from 'mongoose'
//Faaliyet
const schema = new Schema(
  {
    title: String,
    performanceIndicator: String,
    performanceGoalCount: Number,
    responsible: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    periodGoal: [
      {
        // Hangi yıla denk geldiği
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
