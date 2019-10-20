import {Tool} from './tool';

export interface Step {
  id: bigint;
  name: string;
  tools: Tool[];
}
