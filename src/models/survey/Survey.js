import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    title: String,
    firstTitle: String,
    finishTitle: String,
    active: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('survey', schema)
