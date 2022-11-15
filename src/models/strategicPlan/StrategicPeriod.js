import { Schema, model } from 'mongoose'
//periyot
const schema = new Schema(
  {
    year: Number,
    strategicSystem: {
      type: Schema.Types.ObjectId,
      ref: 'strategic-system',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('strategic-periods', schema)
