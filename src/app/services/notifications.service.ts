import { Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';

export interface Message {
  type: string
}

export class NotificationsService {
  private url = 'http://localhost:3000';
  private socket;

  sendMessage(message) {
    this.socket.emit('message', message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return this.socket;
    });
    return observable;
  }

}
