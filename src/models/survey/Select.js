import { Schema, model } from 'mongoose'

const OptionSchema = new Schema({
  option: String,
})
const schema = new Schema(
  {
    title: String,
    options: [OptionSchema],
    multiSelect: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('select', schema)
