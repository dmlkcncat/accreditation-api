import path from 'path'

const DIR = 'uploads/'

export default async (file, name = false, subDir = '') => {
  if (!name) {
    const randomPrefix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    name = [randomPrefix, path.extname(file.name)].join('')
  }

  const filePath = DIR + subDir + name
  const fullPath = path.resolve(filePath)

  await file.mv(fullPath)

  return '/' + filePath
}
