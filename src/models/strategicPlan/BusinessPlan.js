import { Schema, model } from 'mongoose'
//Faaliyet
const schema = new Schema(
  {
    planType: {
      type: String,
      enum: ['business', 'manuel'],
    },
    date: Date,
    time: String,
    title: String,
    responsible: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    activity: {
      type: Schema.Types.ObjectId,
      ref: 'strategic-activities',
    },
    period: {
      type: Schema.Types.ObjectId,
      ref: 'strategic-periods',
    },
    statu: Boolean,
    proof: {
      type: Schema.Types.ObjectId,
      ref: 'business-plan-proof',
    },
    accreditationList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'accreditation',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('business-plan', schema)
