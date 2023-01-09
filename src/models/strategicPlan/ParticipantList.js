import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    memberList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'member',
      },
    ],
    businessPlan: {
      type: Schema.Types.ObjectId,
      ref: 'business-plan',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('participant-list', schema)
