import {defineCliConfig} from 'sanity/cli'
require('dotenv').config()
require('dotenv').config({
  path: `.env.${process.env['NODE_ENV']}`,
})

export default defineCliConfig({
  api: {
    projectId: process.env['SANITY_PROJECT_ID'],
    dataset: process.env['SANITY_READ_TOKEN'],
  },
})
