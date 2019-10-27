import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.sass']
})
export class ItemDescriptionComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
