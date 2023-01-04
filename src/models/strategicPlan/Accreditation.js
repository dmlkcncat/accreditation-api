import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    title: String,
    parent: {
      type: Schema.Types.ObjectId,
      default: null,
    },
    businessPlanList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'business-plan',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('accreditation', schema)
