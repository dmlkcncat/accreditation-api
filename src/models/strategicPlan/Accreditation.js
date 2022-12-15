import { Schema, model } from 'mongoose'

const schema = new Schema(
  {
    heading: String,
    rota: [
      {
        title: String,
        rota2: [
          {
            title2: String,
          },
        ],
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('accreditation', schema)
