import { RequestBody, Components } from '..'
import { AstType } from '../../../ast'
import { RefStore } from '../../ref'
import { OperationType } from '../OperationType'

export function convertOperation(refRoot: RefStore) {
  return (op?: OperationType): AstType[] => {
    if (!op) {
      return []
    }
    
    
    // TODO

    return []
  }
}
