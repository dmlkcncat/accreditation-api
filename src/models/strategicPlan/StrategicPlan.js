import { Schema, model } from 'mongoose'
import StrategicSystem from './StrategicSystem'
//Amaç
const schema = new Schema(
  {
    title: String,
    strategicSystem: {
      type: Schema.Types.ObjectId,
      ref: 'strategic-system',
    },
    strategicGoals: [
      {
        type: Schema.Types.ObjectId,
        ref: 'strategic-goals',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

schema.post('save', async (doc, next) => {
  await StrategicSystem.findByIdAndUpdate(doc.strategicSystem, {
    $addToSet: { strategicPlans: doc._id },
  })

  next()
})

export default model('strategic-plans', schema)
