import {Component, OnInit} from '@angular/core';
import {ProcessService} from '../../service/process.service';
import {Process} from '../../interface/process';
import {ActivatedRoute, Router} from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.selectedProcess = this.processesService.getSelectedProcess();
    const itemType = this.getItemType();
    this.route.paramMap.subscribe(
      params => {
        this.item = this.processesService.getSelectedProcessNestedItem(
          itemType,
          this.getItemId(itemType, params)
        );
      }
    );
  }

  getItemType() {
    const possibleItemTypes = ['parameter', 'tool', 'step', 'process'];
    const itemType = this.router.url.split('/')
      .reverse()
      .find(urlPart => {
          return possibleItemTypes.find(type => type === urlPart);
        }
      );
    console.log(itemType);
    return itemType;
  }

  getItemId(itemType: string, params: any): number {
    const id = params.get([`${itemType}Id`]);
    if (id) {
      return Number(id);
    }
  }

}
