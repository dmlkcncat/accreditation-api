import Mongoose from 'mongoose'
import seed from '../seeds'

const db = Mongoose.connection

db.once('open', async () => {
  console.log('DB Bağlantısı Başarılıdır..')

  // await seed()
})

const connectDB = async () => {
  await Mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
      useNewurlParser: true,
      useUnifiedTopology: true,
    }
  )
}

export { connectDB }
