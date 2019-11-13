import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProcessService} from '../../../service/process.service';
import {NavigationService} from '../../../service/navigation.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent implements OnInit {
  @Input() item: any;

  constructor(
    private router: Router,
    private navigationService: NavigationService,
    private processService: ProcessService,
    ) { }

  ngOnInit() {
  }

  selectItem() {
    if (this.item.type === 'process') {
      this.processService.setSelectedProcess(this.item);
    }
    console.log(this.processService.getSelectedProcess());
    this.navigateToItem();
  }

  navigateToItem() {
    this.navigationService.navigateToItem(this.item);
  }

}
