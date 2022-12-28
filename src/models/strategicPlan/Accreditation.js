import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    title: String,
    parent: {
      type: Schema.Types.ObjectId,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('accreditation', schema)
