import { Injectable } from '@angular/core';

import {Item} from './item';

declare var _:any;

let items = [];

@Injectable()
export class BmiService {

  constructor() {
    console.log('creating service');
  }

  index(): Item[] {
    return items;
  }

  create(item: Item) {
    items.push(Object.assign({}, item, {
      id: items.length + 1,
      bmi: {
        value: 24,
        description: 'Overweight'
      }
    }));
  }

  delete(id: number) {
    items = _.reject(items, (item) => item.id === id);
  }

}
