import {Component, OnInit, Input} from '@angular/core';

import Item from './item.model';
import {BmiService} from "../bmi.service";

@Component({
  selector: '[app-item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [
    BmiService
  ]
})

export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor(private _bmiService: BmiService) {}

  ngOnInit() {}

  delete(id: number): boolean {
    this._bmiService.delete(id);
    return false;
  }

}
