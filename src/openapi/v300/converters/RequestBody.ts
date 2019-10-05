import { RequestBody, Components } from '..'
import { AstType } from '../../../ast'
import { resolve } from '../../ref'

export function convertRequestBody<T>(doc: T & { components: Components }) {
  return (requestBody?: RequestBody): AstType[] => {
    if (!requestBody) {
      return []
    }
    
    // TODO

    return []
  }
}
