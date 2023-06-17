import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project'
import profile from './schemas/profile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    project,
    // profile,
  ],
}
