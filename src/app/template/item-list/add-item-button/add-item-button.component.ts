import {Component, Input, OnInit} from '@angular/core';
import {ProcessService} from '../../../service/process.service';

@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.sass']
})
export class AddItemButtonComponent implements OnInit {

  @Input() item: any;
  @Input() itemsType: any;
  private processService: ProcessService;

  constructor(
    processService: ProcessService
  ) {
    this.processService = processService;
  }

  ngOnInit() {
  }

  addItem() {
    const newItem = this.createItem();
    if (this.itemsType.toLowerCase() === 'process') {
      this.processService.getAllProcesses().push(newItem);
    } else {
      this.processService.getSelectedProcessNestedItem(
        this.item.type,
        this.item.id
      ).children.push(newItem);
    }
  }

  createItem() {
    // @TODO
    //  move creation logic into an ItemFactory class
    if (this.itemsType.toLowerCase() === 'process') {
      return {
        id: undefined,
        type: this.itemsType,
        subject: 'default subject',
        name: 'default name',
        children: [],
        childrenType: 'step'
      };
    } else if (this.itemsType.toLowerCase() === 'step') {
      return {
        id: undefined,
        type: this.itemsType,
        subject: 'default subject',
        name: 'default name',
        children: [],
        childrenType: 'tool'
      };
    } else if (this.itemsType.toLowerCase() === 'tool') {
        return {
          id: undefined,
          type: this.itemsType,
          subject: 'default subject',
          name: 'default name',
          children: [],
          childrenType: 'parameter'
        };
    } else if (this.itemsType.toLowerCase() === 'parameter') {
      return {
        id: undefined,
        type: this.itemsType,
        name: 'default name',
        value: undefined
      };
    }
  }

}
