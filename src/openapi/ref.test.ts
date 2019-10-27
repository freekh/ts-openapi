import { Schema } from './v300'
import { RefStore } from './ref'

export const userComponents = {
  components: {
    schemas: {
      'User': {
        'type': 'object',
        'properties': {
          'name': {
            'type': 'string'
          },
          'petType': {
            'type': 'string'
          }
        },
      },
    }
  }
}

test('basic resolve', async () => {
  const root = new RefStore(userComponents)
  expect(await root.resolve<Schema>({ $ref: '#/components/schemas/User' })).toBe(userComponents.components.schemas.User)
})
