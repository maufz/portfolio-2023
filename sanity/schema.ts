import { type SchemaTypeDefinition } from 'sanity'
import portfolio from './schemas/portfolio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolio],
}
