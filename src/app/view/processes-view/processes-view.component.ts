import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProcessService} from '../../service/process.service';
import {Process} from '../../interface/process';

@Component({
  selector: 'app-processes-view',
  templateUrl: './processes-view.component.html',
  styleUrls: ['./processes-view.component.sass']
})
export class ProcessesViewComponent implements OnInit {

  constructor(
    private processService: ProcessService
  ) {
  }

  ngOnInit() {
  }

}
