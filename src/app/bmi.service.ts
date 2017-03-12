import { Injectable } from '@angular/core';

import Item from './item/item.model';

declare var _:any;

let items = [
  new Item(1, {value: 18, description: 'Underweight'}, 'standard'),
  new Item(2, {value: 23, description: 'Normal weight'}, 'standard'),
  new Item(3, {value: 28, description: 'Overweight'}, 'standard'),
  new Item(4, {value: 33, description: 'Obese'}, 'standard')
];

@Injectable()
export class BmiService {

  constructor() {
    console.log('creating service');
  }

  index(): Item[] {
    return items;
  }

  create(item: Item) {
    items.push(item);
  }

  delete(id: number) {
    items = _.reject(items, (item) => item.id === id);
  }

}
