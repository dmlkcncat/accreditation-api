import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    title: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('text', schema)
