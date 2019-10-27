import {Parameter} from './parameter';

export interface Tool {
  id: bigint;
  type: string;
  name: string;
  children: Parameter[];
  childrenType: string;
}
