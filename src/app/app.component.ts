import { Component, OnDestroy, OnInit } from '@angular/core';

import { Item } from "./item";
import { BmiService } from "./services/bmi.service";
import { NotificationsService } from "./services/notifications.service";

declare var _:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy, OnInit {
  item: Item;
  list: Item[];
  messages = [];
  connection;

  constructor(private BmiService: BmiService, private NotificationsService: NotificationsService) {
  }

  ngOnInit() {
    this.item = {mode: 'standard'};
    this.connection = this.NotificationsService.getMessages().subscribe(message => {
      this.messages.push(message);
      this.index();
    });
    this.notify({type: 'index'});
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  index() {
    return this.BmiService.index()
      .subscribe(
        list => this.list = list,
        err => { console.log(err); }
      );
  }

  create(model: Item, isValid: boolean) {
    const cleanItem = _.pickBy(model, (v) => !_.isUndefined(v));
    this.BmiService.create(cleanItem)
      .subscribe(
        () => {
          this.item = {mode: 'standard'};
          this.notify({type: 'create'});
        },
        err => { console.log(err); }
      );
  }

  delete(id: number) {
    this.notify({type: 'delete'});
  }

  notify(message: Object) {
    this.NotificationsService.sendMessage(message);
  }

  isMode(mode: string) {
    return this.item.mode === mode;
  }

}
