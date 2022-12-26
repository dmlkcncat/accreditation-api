import User from '../models/User'
import UserRole from '../models/UserRole'
import { passwordToHash } from '../scripts/utils/helper'

export default async () => {
  const userRole = await UserRole.findOne()

  const user = new User({
    fullName: 'test',
    mail: 'test@test.com',
    password: passwordToHash('0000'),
    telephone: '0000000000',
    userRole: userRole._id,
  })

  await user.save()
}
