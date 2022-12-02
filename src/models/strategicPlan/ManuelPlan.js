import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    title: String,
    date: Date,
    time: String,
    location: String,
    responsible: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    period: String,
    statu: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('manuel-plan', schema)
