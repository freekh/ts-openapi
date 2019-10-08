import { convertRequestBody } from './OperationType'
import { RequestBody } from '..'
import { userComponents } from '../../ref.test'
// import { RefRoot } from '../../ref'

// const root = new RefRoot(userComponents)

test('convert undefined', () => {
  convertRequestBody(root)()
})

test('convert RequestBody', () => {
  const example: RequestBody = {
    'description': 'user to add to the system',
    'content': {
      'application/json': {
        'schema': {
          '$ref': '#/components/schemas/User'
        },
        'examples': {
            'user' : {
              'summary': 'User Example', 
              'externalValue': 'http://foo.bar/examples/user-example.json'
            } 
          }
      },
      'application/xml': {
        'schema': {
          '$ref': '#/components/schemas/User'
        },
        'examples': {
            'user' : {
              'summary': 'User example in XML',
              'externalValue': 'http://foo.bar/examples/user-example.xml'
            }
          }
      },
      'text/plain': {
        'examples': {
          'user' : {
              'summary': 'User example in Plain text',
              'externalValue': 'http://foo.bar/examples/user-example.txt' 
          }
        } 
      },
      '*/*': {
        'examples': {
          'user' : {
              'summary': 'User example in other format',
              'externalValue': 'http://foo.bar/examples/user-example.whatever'
          }
        }
      }
    }
  }
  
  convertRequestBody(root)(example)
})
