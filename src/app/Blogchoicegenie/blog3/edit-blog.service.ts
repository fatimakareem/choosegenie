import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../../Config";
@Injectable()
export class EditBlogService {

  constructor(private http: Http) { }
  

editTodoList(id,updatedheading1,updatedcontent1,updatedCh_image,updatedheading2,updatedcontent2,updatedheading3,updatedcontent3,updatedheading4,updatedcontent4,updatedheading5,updatedcontent5,updatedheading6,updatedcontent6) {
  
  console.log(" service object",id,updatedheading1,updatedcontent1,updatedCh_image,updatedheading2,updatedcontent2,updatedheading3,updatedcontent3,updatedheading4,updatedcontent4,updatedheading5,updatedcontent5,updatedheading6,updatedcontent6)
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put(Config.api+'upblog/'+ id , JSON.stringify({
   
    "heading1": updatedheading1,
    "content1": updatedcontent1,
    "Ch_image": updatedCh_image,
    "heading2": updatedheading2,
    "content2": updatedcontent2,
    "heading3": updatedheading3,
    "content3": updatedcontent3,
    "heading4": updatedheading4,
    "content4": updatedcontent4,
    "heading5": updatedheading5,
    "content5": updatedcontent5,
    "heading6": updatedheading6,
    "content6": updatedcontent6,
    
  }), 
  {headers: headers}).map((response: Response) => response.json());
  }

}