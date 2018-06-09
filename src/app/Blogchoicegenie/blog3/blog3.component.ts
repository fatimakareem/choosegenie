import { Component, OnInit } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
// import {ContactUsService} from "./contact-us.service";
import { AgmCoreModule } from '@agm/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

import { Config } from "../../Config";
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
 import swal from 'sweetalert2'; 
 import { DeleteBlogService } from './delete-blog.service';
 import { EditBlogService } from './edit-blog.service';

import { MatSelect } from '@angular/material'; 
@Component({
  selector: 'app-blog3',
  templateUrl: './blog3.component.html',
  styleUrls: ['./blog3.component.scss']
})
export class Blog3Component implements OnInit {

  constructor(private serve:EditBlogService,private newService:DeleteBlogService,private https:Http,public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }
  data:any=[];
    ngOnInit() {
      this. profile();
    }
    profile() {
      
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.https.get(Config.api+'Gettingblog/' , { headers: headers })
      
      .subscribe(Res => {
      this.data=Res.json();
      console.log(this.data);
      });
      
      }
      id='';
      btnDeleteClick(id) {
        this.id = id;
        console.log('id : ' + this.id);
    }
      deleteClick(id) {
        console.log('delete' + id);

        //Calling Delete Service
        this.newService.DeleteTodoList(this.id).subscribe(data => {
            console.log(data);
            swal({
                type: 'success',
                title: 'Successfully deleted',
                showConfirmButton: false,
                timer: 1500
              })
         
              this. profile();

               
        }, error => {
        });
     //   window.location.reload();

    }
    heading1='';
    content1='';
    Ch_image='';
    heading2='';
    content2='';
    heading3='';
    content3='';
    heading4='';
    content4='';
    heading5='';
    content5='';
    heading6='';
    content6='';
    blogId='';
    btnEditClick(id,heading1,content1,Ch_image,heading2,content2,heading3,content3,heading4,content4,heading5,content5,heading6,content6) {
      this.blogId = id;
      
      this.heading1=heading1;
    this.content1=content1;
    this.Ch_image=Ch_image;
    this.heading2=heading2;
    this.content2=content2;
    this.heading3=heading3;
    this.content3=content3;
    this.heading4=heading4;
    this.content4=content4;
    this.heading5=heading5;
    this.content5=content5;
    this.heading6=heading6;
    this.content6=content6;
     
      console.log(this.blogId,heading1,content1,Ch_image,heading2,content2,heading3,content3,heading4,content4,heading5,content5,heading6,content6)
      console.log('id : ' + this.blogId );
  }

  //Event Binding of PopUp Delete Modal

  editClick(updatedheading1,updatedcontent1,updatedCh_image,updatedheading2,updatedcontent2,updatedheading3,updatedcontent3,updatedheading4,updatedcontent4,updatedheading5,updatedcontent5,updatedheading6,updatedcontent6) {
      console.log('edit' +updatedheading1,updatedcontent1,updatedCh_image,updatedheading2,updatedcontent2,updatedheading3,updatedcontent3,updatedheading4,updatedcontent4,updatedheading5,updatedcontent5,updatedheading6,updatedcontent6);
console.log("TS OBJECT",updatedheading1,updatedcontent1,updatedCh_image,updatedheading2,updatedcontent2,updatedheading3,updatedcontent3,updatedheading4,updatedcontent4,updatedheading5,updatedcontent5,updatedheading6,updatedcontent6);
      //Calling Delete Service
      this.serve.editTodoList(this.blogId,updatedheading1,updatedcontent1,updatedCh_image,updatedheading2,updatedcontent2,updatedheading3,updatedcontent3,updatedheading4,updatedcontent4,updatedheading5,updatedcontent5,updatedheading6,updatedcontent6).subscribe(data => {
          console.log(data);
          swal({
              type: 'success',
              title: 'Successfully updated',
              showConfirmButton: false,
              timer: 1500
            })
            this. profile();

      }, error => {
      });
    //  window.location.reload();

  }
  }


