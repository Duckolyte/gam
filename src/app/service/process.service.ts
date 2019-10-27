import {Injectable} from '@angular/core';
import * as Process from 'process';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  allProcesses: Process[];
  selectedProcess: Process;

  constructor() {
    const dummyProcess1 = {
      id: 1,
      type: 'process',
      name: 'dummyProcess1',
      subject: 'dummy subject 1',
      childrenType: 'Step',
      children: [
        {
          id: 1,
          type: 'step',
          name: 'cleaning-step-1',
          childrenType: 'Tool',
          children: [
            {
              id: 1,
              type: 'tool',
              name: 'cleaning-tool-1',
              childrenType: 'Parameter',
              children: [
                {
                  id: 1,
                  type: 'parameter',
                  name: 'threshold-1',
                  value: '60',
                },
                {
                  id: 2,
                  type: 'parameter',
                  name: 'threshold-1',
                  value: '60',
                },
                {
                  id: 3,
                  type: 'parameter',
                  name: 'offset',
                  value: '100',
                }
              ]
            }
          ],
        }
      ],
    };
    const dummyProcess2 = {
      id: 2,
      type: 'process',
      name: 'dummyProcess2',
      subject: 'dummy subject 2',
      childrenType: 'Step',
      children: [],
    };
    const dummyProcess3 = {
      id: 3,
      type: 'process',
      name: 'dummyProcess3',
      subject: 'dummy subject 3',
      childrenType: 'Step',
      children: [],
    };
    this.updateAllProcesses([dummyProcess1, dummyProcess2, dummyProcess3]);
  }

  updateAllProcesses(processes: Process[]) {
    this.allProcesses = processes;
  }

  getAllProcesses() {
    return this.allProcesses;
  }

  getSelectedProcess() {
    return this.selectedProcess;
  }

  updateProcessSelection(selectedProcess) {
    if (this.selectedProcess.id === selectedProcess.id) {
      this.clearSelectedProcess();
      return;
    }
    this.selectedProcess = this.setSelectedProcess(selectedProcess);
  }

  setSelectedProcess(selectedProcess) {
    this.selectedProcess = this.allProcesses.find(
      process => process.id === selectedProcess.id
    );
  }

  clearSelectedProcess() {
    this.selectedProcess = null;
  }

  getSelectedProcessNestedItem(itemType: string, itemId: number) {
    if (itemType === 'process') {
      return this.selectedProcess;
    }
    return this.searchInChildren(
      this.selectedProcess,
      itemType,
      itemId
    );
  }

  private searchInChildren(obj: any, itemType: string, itemId: number) {
    if (obj.childrenType.toLowerCase() === itemType) {
      return obj.children.find(child => child.id === itemId);
    }
    for (const child of obj.children) {
      const match = this.searchInChildren(child, itemType, itemId);
      if (match) {
        return match;
      }
    }
  }
}
