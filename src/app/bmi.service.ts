import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Item} from './item';

declare var _:any;

@Injectable()
export class BmiService {

  private bmiUrl = 'http://localhost:3000/api/bmi';

  constructor(private http: Http) {
    console.log('creating service');
  }

  index(): Observable<Item[]> {
    return this.http.get(this.bmiUrl)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error) || 'Server error');
  }

  create(item: Object): Observable<Item[]> {
    return this.http.post(this.bmiUrl, item)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error) || 'Server error');
  }

  delete(id: number): Observable<Item[]> {
    return this.http.delete(`${this.bmiUrl}/${id}`)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error) || 'Server error');
  }

}
