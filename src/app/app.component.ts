import { Component } from '@angular/core';

import {BmiService} from "./bmi.service";
import Item from "./item/item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    BmiService
  ]
})

export class AppComponent {
  constructor(private _bmiService: BmiService) {
  }

  index() {
    return this._bmiService.index();
  }

  create(pounds: HTMLInputElement, feet: HTMLInputElement, inches: HTMLInputElement): boolean {
    this._bmiService.create(new Item(999, {}, 'metric'));
    return false;
  }
}
