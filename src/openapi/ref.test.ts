import { resolve } from "./ref"
import { Components, Schema } from "./v300"

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
  } as Components
}

test('basic resolve', () => {
  expect(resolve(userComponents)).toBe(undefined)
  expect(resolve<Schema>(userComponents, { $ref: '#/components/schemas/User' })).toBe(userComponents.components.schemas.User)
})