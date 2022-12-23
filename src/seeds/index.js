import user from './user'
import userRole from './userRole'
import acc from './acc'

export default async () => {
  console.log('tohumluyorum')
  await userRole()

  await user()

  await acc()

  console.log('tohumladım')
}
