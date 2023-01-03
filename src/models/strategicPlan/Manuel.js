import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    location: String,
    period: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('manuel', schema)
