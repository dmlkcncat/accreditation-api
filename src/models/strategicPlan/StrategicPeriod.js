import { Schema, model } from 'mongoose'
//periyot
const schema = new Schema(
  {
    title: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('strategic-periods', schema)
