import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class UnsubscribeService {

  constructor(private http: Http) { }
  unsub(uid) {
    console.log(uid)
    let headers = new Headers();
    return this.http.delete('http://192.168.30.193:9000/choice/unsubscribe/' + uid, { headers: headers }).map((response: Response) => response.json());
}
getunsub(uid) {
  console.log(uid)
  let headers = new Headers();
  return this.http.get('http://192.168.30.193:9000/choice/unsubscribe/' + uid, { headers: headers }).map((response: Response) => response.json());
}
}
