import { connectDB } from './db'

export default async () => {
  await connectDB()
}
