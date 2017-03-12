import { Component } from '@angular/core';

import {Item} from "./item";
import {BmiService} from "./bmi.service";

declare var _:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    BmiService
  ]
})

export class AppComponent {
  item: Item;

  constructor(private _bmiService: BmiService) {
  }

  ngOnInit() {
    this.item = {mode: 'standard'};
  }

  index() {
    return this._bmiService.index();
  }

  create(model: Item, isValid: boolean) {
    this._bmiService.create(_.pickBy(model, (v) => !_.isUndefined(v)));
    this.item = {mode: 'standard'};
  }

  isMode(mode) {
    return this.item.mode === mode;
  }

}
