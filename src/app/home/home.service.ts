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
   
   return this.http.get(Config.api+'zipcodedata/' + id +'?page='+page).map((response: Response) => response.json());
    }
  searchProducts1(id,page) {
    console.log(id)
   return this.http.get(Config.api+'deregulated/' + id +'?page='+page +'').map((response: Response) => response.json());
  }
  inactiveproduct(title,page){
    console.log(title)
   
   return this.http.get(Config.api+'inactive/' + this.username +'?page='+page +'/').map((response: Response) => response);

  }
  filter(page,id,months1,months2,months3,months4,months5,months6,months7,fixed,vari,index,notprepaid,prepaid,planmin,time,nottime,renewable,com,price,sort,min_price_2000,max_price_2000,item,min_price_500,max_price_500,min_price_1000,max_price_1000) {
 console.log(price)
    if(price == undefined){
      console.log(months1,months2,months3,months4,months5,months6,months7,fixed,vari,index,notprepaid,prepaid,planmin,time,nottime,renewable,com,price,sort,min_price_2000,max_price_2000,item)
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(Config.api+'multifilter/'+id +'?page='+page, JSON.stringify({
        "plan_type1": fixed,
        "plan_type2": index,
        "plan_type3": vari,
        "plan_information1": months1,
        "plan_information2": months2,
        "plan_information3": months3,
        "plan_information4": months4,
        "plan_information5": months5,
        "plan_information6": months6,
        "prepaid": prepaid,
        "noprepaid": notprepaid,
        "planmin": planmin,
        "time":time,
        "notime":nottime,
        "renewablerate":renewable,
        "company":com,
        "itemsperpage":item,
        "dsc":sort

       }), 
      {headers: headers}).map((response: Response) => response.json());
      }
    else if(price==500){
    console.log(months1,months2,months3,months4,months5,months6,months7,fixed,vari,index,notprepaid,prepaid,planmin,time,nottime,renewable,com,price,sort,min_price_2000,max_price_2000,item)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(Config.api+'multifilter/'+id +'?page='+page, JSON.stringify({
      "plan_type1": fixed,
      "plan_type2": index,
      "plan_type3": vari,
      "plan_information1": months1,
      "plan_information2": months2,
      "plan_information3": months3,
      "plan_information4": months4,
      "plan_information5": months5,
      "plan_information6": months6,
      "prepaid": prepaid,
      "noprepaid": notprepaid,
      "planmin": planmin,
      "time":time,
      "notime":nottime,
      "renewablerate":renewable,
      "company":com,
      "itemsperpage":item,
      "price_500_kwh_min_price": min_price_500,
      "price_500_kwh_max_price": max_price_500,
      "dsc":sort
     }), 
    {headers: headers}).map((response: Response) => response.json());
    }
  
 else if(price==1000){
    console.log(months1,months2,months3,months4,months5,months6,months7,fixed,vari,index,notprepaid,prepaid,planmin,time,nottime,renewable,com,price,sort,min_price_2000,max_price_2000,item)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(Config.api+'multifilter/'+id +'?page='+page, JSON.stringify({
      "plan_type1": fixed,
      "plan_type2": index,
      "plan_type3": vari,
      "plan_information1": months1,
      "plan_information2": months2,
      "plan_information3": months3,
      "plan_information4": months4,
      "plan_information5": months5,
      "plan_information6": months6,
      "prepaid": prepaid,
      "noprepaid": notprepaid,
      "planmin": planmin,
      "time":time,
      "notime":nottime,
      "renewablerate":renewable,
      "company":com,
      "itemsperpage":item,
      "price_1000_kwh_min_price": min_price_1000,
      "price_1000_kwh_max_price": max_price_1000,
      "dsc":sort
     }), 
    {headers: headers}).map((response: Response) => response.json());
    }
  
 else if(price==2000){
    console.log(months1,months2,months3,months4,months5,months6,months7,fixed,vari,index,notprepaid,prepaid,planmin,time,nottime,renewable,com,price,sort,min_price_2000,max_price_2000,item)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(Config.api+'multifilter/'+id +'?page='+page, JSON.stringify({
      "plan_type1": fixed,
      "plan_type2": index,
      "plan_type3": vari,
      "plan_information1": months1,
      "plan_information2": months2,
      "plan_information3": months3,
      "plan_information4": months4,
      "plan_information5": months5,
      "plan_information6": months6,
      "prepaid": prepaid,
      "noprepaid": notprepaid,
      "planmin": planmin,
      "time":time,
      "notime":nottime,
      "renewablerate":renewable,
      "company":com,
      "itemsperpage":item,
        "price_2000_kwh_min_price": min_price_2000,
        "price_2000_kwh_max_price": max_price_2000,
      "dsc":sort
     }), 
    {headers: headers}).map((response: Response) => response.json());
    }
 
  }
}
 