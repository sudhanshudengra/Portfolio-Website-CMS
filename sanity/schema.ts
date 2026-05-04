import { type SchemaTypeDefinition } from 'sanity'

import project from './schemas/project'
import experience from './schemas/experience'
import skill from './schemas/skill'
import philosophy from './schemas/philosophy'
import siteSettings from './schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, experience, skill, philosophy, siteSettings],
}
