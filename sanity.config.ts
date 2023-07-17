import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
require('dotenv').config()
require('dotenv').config({
  path: `.env.${process.env['NODE_ENV']}`,
})

export default defineConfig({
  name: 'default',
  title: 'onefrankdesignblog',

  projectId: process.env['SANITY_PROJECT_ID'] || 'o1ddtxhi',
  dataset: process.env['SANITY_READ_TOKEN'] || 'staging',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
