import { Schema, model } from 'mongoose'
//Hedef
const schema = new Schema(
  {
    title: String,
    // strategicPlan: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'strategic-plan',
    // },
    strategicActivities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'strategic-activities',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('strategic-goals', schema)
