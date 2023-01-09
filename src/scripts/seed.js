import config from '../config'
import loaders from '../loaders'
import seed from '../seeds'
import { exit } from 'node:process'
import prompts from 'prompts'
import mongoose from 'mongoose'

config()
;(async () => {
  await loaders()

  const response = await prompts({
    type: 'confirm',
    name: 'value',
    message: 'veritabani patlasin mi?',
    validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
  })

  const { value } = response

  if (value) {
    await mongoose.connections.at(0).dropDatabase()

    console.log('patladiii!!!')
  }

  await seed()

  exit()
})()
