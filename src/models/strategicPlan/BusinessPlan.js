import { Schema, model } from 'mongoose'
//Faaliyet
const schema = new Schema(
  {
    date: Date,
    time: String,
    location: String,
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('business-plan', schema)
