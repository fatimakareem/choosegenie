import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
import {HttpService} from '../serv/http-service';
@Injectable()
export class HomeService {
public username;
  months:any[];
  company;
  constructor(private http: HttpService) {this.username = localStorage.getItem('username');
               this.company = localStorage.getItem('company');
}

  searchProducts(id,page) {
    console.log(id)
    let url;
    if(localStorage.getItem('company')){
      url =  'company/' + id + '/' + this.company+'?page='+page
    }else{
      url = 'zipcodedata/' + id +'?page='+page
    }
   return this.http.get(Config.api+url).map((response: Response) => response.json());
    }
  searchProducts1(id,page) {
    console.log(id)
   return this.http.get('http://192.168.30.193:9000/choice/deregulated/' + id +'?page='+page +'').map((response: Response) => response.json());
  }
  inactiveproduct(title,page){
    console.log(title)
   
   return this.http.get(Config.api+'inactive/' + this.username +'?page='+page +'/').map((response: Response) => response);

  }
}
 