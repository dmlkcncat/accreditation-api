import user from './user'
import userRole from './userRole'

export default async () => {
  await userRole()

  await user()
}
