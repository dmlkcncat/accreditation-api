import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    fullName: String,
    mail: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('member', schema)
