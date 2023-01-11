import UserRole from '../models/UserRole'

export default async () => {
  await UserRole.insertMany([
    { title: 'Yönetim' },
    { title: 'Meclis' },
    { title: 'Akreditasyon' },
    { title: 'Personel' },
  ])
}
