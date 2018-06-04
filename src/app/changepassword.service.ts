import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "./Config";
@Injectable()
export class ChangepasswordService {

 
  constructor(private http: Http) { }
  

  changepsd(username,oldpass,pass1,pass2) {
   
    console.log(" service object",username,oldpass,pass1,pass2)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(Config.api+'change_password/'+ username 
    +'/' , JSON.stringify({
     
      "currentPassword":oldpass,
      "newPassword":pass1, 
      "newPassword2":pass2
      
    }), 
    {headers: headers}).map((response: Response) => response.json());
    }
  
  }

  



  