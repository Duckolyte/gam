import {Parameter} from './parameter';

export interface Tool {
  id: bigint;
  name: string;
  parameters: Parameter[];
}
