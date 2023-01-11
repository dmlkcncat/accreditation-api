import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    participantList: [
      {
        type: {
          type: String,
          enum: ['user', 'member'],
        },
        participant: {
          type: Schema.Types.ObjectId,
          refPath: 'participantList.type',
        },
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
