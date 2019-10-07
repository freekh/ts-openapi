import { Operation } from '.';

export type OperationType = Operation & {
  type: 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
}
