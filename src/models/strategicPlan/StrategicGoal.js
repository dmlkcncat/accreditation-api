import { Schema, model } from 'mongoose'
//Hedef
const schema = new Schema(
  {
    title: String,
    strategicActivities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'strategic-activities',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('strategic-goals', schema)
