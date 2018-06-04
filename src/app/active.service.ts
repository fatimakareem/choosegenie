
import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "./Config";
@Injectable()
export class ActiveService {

  months:any[];
  constructor(private http: Http) { }

  // activate(uid) {
  //   console.log(uid)
  //  return this.http.get(Config.api+'activate/' + uid ).map((response: Response) => response.json());
  //  // return this.http.get('http://192.168.30.52:9000/choice/zipcodedata/'+id+'?page='+page).map((response: Response) => response.json());
  // }
  // isactivated(username) {
  //   console.log(username)
  //  return this.http.get(Config.api+'isactivated/' + username ).map((response: Response) => response.json());
  //  // return this.http.get('http://192.168.30.52:9000/choice/zipcodedata/'+id+'?page='+page).map((response: Response) => response.json());
  // }
}
