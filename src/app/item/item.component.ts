import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {Item} from '../item';
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
  @Output() itemDeleted = new EventEmitter();

  constructor(private _bmiService: BmiService) {}

  ngOnInit() {}

  delete(id: number): boolean {
    this._bmiService.delete(id)
      .subscribe(
        () => this.itemDeleted.emit(id),
        err => console.log(err)
      );
    return false;
  }

}
