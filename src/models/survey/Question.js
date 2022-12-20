import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    questionType: {
      type: String,
      required: true,
      enum: ['text', 'select', 'rate'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('question', schema)
