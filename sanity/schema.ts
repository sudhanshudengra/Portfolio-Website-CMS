import { type SchemaTypeDefinition } from 'sanity'

import project from './schemas/project'
import experience from './schemas/experience'
import skill from './schemas/skill'
import philosophy from './schemas/philosophy'
import siteSettings from './schemas/siteSettings'
import contactSubmission from './schemas/contactSubmission'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, experience, skill, philosophy, siteSettings, contactSubmission],
}
