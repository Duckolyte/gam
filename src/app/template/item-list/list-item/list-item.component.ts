import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProcessService} from '../../../service/process.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent implements OnInit {
  @Input() item: any;

  constructor(
    private router: Router,
    private processService: ProcessService,
    ) { }

  ngOnInit() {
  }

  selectItem() {
    this.processService.setSelectedProcess(this.item);
    console.log(this.processService.getSelectedProcess());
    this.navigateToItem();
  }

  navigateToItem() {
    this.router.navigate([`${this.getCurrentUrl()}/${this.item.type}/${this.item.id}`]);
  }

  getCurrentUrl(): string {
    return this.router.url;
  }
}
