import {Component, Input, OnInit} from '@angular/core';
import {ProcessService} from '../../../../service/process.service';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from '../../../../service/navigation.service';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.sass']
})
export class ItemMenuComponent implements OnInit {

  @Input() item: any;

  constructor(
    private processService: ProcessService,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) {
  }

  ngOnInit() {
  }

  editItem() {
    this.navigationService.navigateToItem(this.item);
  }

  deleteItem() {
    this.processService.removeSelectedProcessNestedItem(this.item.type, this.item.id);
  }

}
