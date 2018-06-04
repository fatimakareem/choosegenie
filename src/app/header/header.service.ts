import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
import {HttpService} from '../serv/http-service';
@Injectable()
export class HeaderService {
public username;
  months:any[];
  constructor(private http: HttpService,private _http5: Http) {
    // this.username = localStorage.getItem('username');
 }


 searchrecord(search) {
    
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this._http5.post(Config.api + 'search/',
  {"search":search},
  {headers: headers}).map((response: Response) => response.json());
  
  }




 searchProducts(id,page) {
    console.log(id)
    // return this.http.get(Config.api + '/zipcodedata/' + id +'?page='+page +'/').map((response: Response) => response.json());
    // http://192.168.30.193:9000/choice/zipcodedata/
   return this.http.get(Config.api+'zipcodedata/' + id +'?page='+page +'/').map((response: Response) => response.json());
   // return this.http.get('http://192.168.30.52:9000/choice/zipcodedata/'+id+'?page='+page).map((response: Response) => response.json());
  }
  inactiveproduct(title,page){
    console.log(title)
    // return this.http.get(Config.api + '/zipcodedata/' + id +'?page='+page +'/').map((response: Response) => response.json());

   return this.http.get(Config.api + 'inactive/' + this.username +'?page='+page +'/').map((response: Response) => response.json());
   // return this.http.get('http://192.168.30.52:9000/choice/zipcodedata/'+id+'?page='+page).map((response: Response) => response.json());
  }
}
 