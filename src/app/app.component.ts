import {Component} from '@angular/core';

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
  list: Item[];

  constructor(private _bmiService: BmiService) {
  }

  ngOnInit() {
    this.item = {mode: 'standard'};
    this.index();
  }

  index() {
    return this._bmiService.index()
      .subscribe(
        list => this.list = list,
        err => { console.log(err); }
      );
  }

  create(model: Item, isValid: boolean) {
    const cleanItem = _.pickBy(model, (v) => !_.isUndefined(v));
    this._bmiService.create(cleanItem)
      .subscribe(
        () => {
          this.item = {mode: 'standard'};
          this.index();
        },
        err => { console.log(err); }
      );
  }

  isMode(mode: string) {
    return this.item.mode === mode;
  }

  handleItemDeleted(id: number) {
    console.log(`${id} deleted!`);
    this.index();
  }

}
