import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.sass']
})
export class ListHeaderComponent implements OnInit {
  @Input() itemsType: any;

  constructor() { }

  ngOnInit() {
  }

}
