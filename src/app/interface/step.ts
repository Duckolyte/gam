import {Tool} from './tool';

export interface Step {
  id: bigint;
  type: string;
  name: string;
  children: Tool[];
  childrenType: string;
}
