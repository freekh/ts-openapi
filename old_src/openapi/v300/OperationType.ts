import { Operation } from '../v300';

export type OperationType = Operation & {
  type: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
}
