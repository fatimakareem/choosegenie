import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
import {HttpService} from '../serv/http-service';
@Injectable()
export class HomeService {
public username;
  months:any[];
  product;
  constructor(private http: HttpService) {this.username = localStorage.getItem('username');
               this.product = localStorage.getItem('PRO');
}

  searchProducts(id,page) {
    console.log(id)
    let url;
    if(localStorage.getItem('PRO')){
      // url =  'multifilter/' + id +'?page='+page
      url = 'zipcodedata/' + id +'?page='+page
    }else{
      url = 'zipcodedata/' + id +'?page='+page
    }
   return this.http.get(Config.api+url).map((response: Response) => response.json());
    }
  searchProducts1(id,page) {
    console.log(id)
   return this.http.get(Config.api+'deregulated/' + id +'?page='+page +'').map((response: Response) => response.json());
  }
  inactiveproduct(title,page){
    console.log(title)
   
   return this.http.get(Config.api+'inactive/' + this.username +'?page='+page +'/').map((response: Response) => response);

  }
}
 