import {Step} from './step';

export interface Process {
  id: bigint;
  name: string;
  steps: Step[];
}
