import {Step} from './step';

export interface Process {
  id: bigint;
  type: string;
  subject: string;
  name: string;
  children: Step[];
  childrenType: string;
}
