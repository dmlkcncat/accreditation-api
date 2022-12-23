import UserRole from '../models/UserRole'

export default async () => {
  const userRole = new UserRole({
    title: 'annen',
  })

  await userRole.save()
}
