import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    questionType: {
      type: String,
      enum: ['text', 'select', 'rate'],
    },
    question: {
      type: Schema.Types.ObjectId,
      refPath: 'questionType',
    },
    required: { type: Boolean },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('question', schema)
