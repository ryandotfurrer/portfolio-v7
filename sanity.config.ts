import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemaTypes'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'z2j0j9ei',
  dataset: 'production',

  plugins: [codeInput(), structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
