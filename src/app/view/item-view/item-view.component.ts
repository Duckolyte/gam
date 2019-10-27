import { Component, OnInit } from '@angular/core';
import {ProcessService} from '../../service/process.service';
import {Process} from '../../interface/process';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.sass']
})
export class ItemViewComponent implements OnInit {

  private selectedProcess: Process;
  private item: any;
  constructor(
    private processesService: ProcessService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedProcess = this.processesService.getSelectedProcess();
    this.item = this.selectedProcess;
  }

}
