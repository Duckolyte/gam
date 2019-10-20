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
      id: '1',
      name: 'dummyProcess1',
      tools: [],
    };
    const dummyProcess2 = {
      id: '2',
      name: 'dummyProcess1',
      tools: [],
    };
    const dummyProcess3 = {
      id: '3',
      name: 'dummyProcess1',
      tools: [],
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

  updateSelectedProcess(selectedProcess) {
    if (this.selectedProcess.id === selectedProcess.id) {
      this.clearSelectedProcess();
      return;
    }
    this.selectedProcess = this.setSelectedProcess(selectedProcess);
  }

  setSelectedProcess(selectedProcess) {
    return this.allProcesses.find(
      process => process.id === selectedProcess.id
    );
  }

  clearSelectedProcess() {
    this.selectedProcess = null;
  }

}
