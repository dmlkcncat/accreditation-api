import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    title: String,
    firstTitle: String,
    finishTitle: String,
    active: Boolean,
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'question',
      },
    ],
    logo: {
      type: Schema.Types.ObjectId,
      ref: 'logo',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('survey', schema)
