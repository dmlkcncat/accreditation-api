import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    title: String,
    path: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('logo', schema)
