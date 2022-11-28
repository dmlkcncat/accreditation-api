import { Schema, model } from 'mongoose'
//Faaliyet
const schema = new Schema(
  {
    date: Date,
    time: String,
    location: String,
    responsible: String,
    activity: String,
    period: String,
    statu: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('business-plan', schema)
