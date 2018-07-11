import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }
  updata(updatedid,updatedREP,updatedREPid,updatedName,updatedphone,updatedmarket,updatedstatus,updateduser) {
  
    console.log()
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(Config.api + 'upcomprofile/'+ updatedREP +'/' , JSON.stringify({
     
      "id": updatedid,
      "REP_name": updatedREP,
      "REP_certificate_id": updatedREPid,
      "Contact_Name": updatedName,
      "Contact_Phone": updatedphone,
      "Market": updatedmarket,
      "status": updatedstatus,
      "user": updateduser
      
    }), 
    {headers: headers}).map((response: Response) => response.json());
    }
}
