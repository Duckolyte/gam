import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent implements OnInit {
  @Input() itemsType: any;
  @Input() items: any;
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
