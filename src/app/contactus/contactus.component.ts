import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {NgForm} from '@angular/forms';
=======
// import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
// import {ContactUsService} from "./contact-us.service";
>>>>>>> 276de87ca0e77c57d88e43a9ddf4ee1605f86be4
import { AgmCoreModule } from '@agm/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Config } from "../Config";
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import swal from 'sweetalert2';
import { MatSelect } from '@angular/material';
import { PasswordValidation } from './password-validator.component';
<<<<<<< HEAD
=======


>>>>>>> 276de87ca0e77c57d88e43a9ddf4ee1605f86be4
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const NAME_REGEX = /^[a-zA-Z _.]+$/;
const PHONE_REGEX = /^[0-9]+$/;
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  state;
  city;
  username;
  confirmpassword;
  signupForm: FormGroup;
  private next: any;
  model: any = {};
  normalPattern = '[a-zA-Z0-9_.-]+?';
  digitsOnly = '^[0-9,-]+$';
  email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

  flag = true;
  date = new FormControl(new Date());

  emailexist: boolean = false;
  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_REGEX)
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PHONE_REGEX)
  ]);

  subjectFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z-0-9 _.]+?')
  ]);
  constructor(public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }
<<<<<<< HEAD
  ngOnInit() {
    this.signupForm = this.fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'mobno': ['', Validators.compose([Validators.required])],
      'msg': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],
=======

  //constructor() { }


  ngOnInit() {
    this.signupForm = this.fb.group({
      //['', Validators.compose([Validators.required])],
      'name': ['', Validators.compose([Validators.requiredTrue])],
      'mobno': ['', Validators.compose([Validators.required])],
      'msg': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],
      'subject':['', Validators.compose([Validators.required])]

      // 'Phone': ['', Validators.compose([Validators.required, Validators.pattern(this.digitsOnly)])],
      // 'country': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],

>>>>>>> 276de87ca0e77c57d88e43a9ddf4ee1605f86be4
    });
  }

  onChange(e) {
    alert(e)
  }
  check(e) {
    console.log(this.model)
  }
<<<<<<< HEAD
=======

  name;
  mobno;
  msg;
  subject;
  cleardata(){
   
 this.model.name= null;
 this.model.mobno=null;
 this.model.msg=null;
 this.model.subject=null;
 this.model.email=null;


  }
>>>>>>> 276de87ca0e77c57d88e43a9ddf4ee1605f86be4
  Contactuserdata() {
    console.log("CHOICE GENIE", this.model);

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
<<<<<<< HEAD
    this.http.post(Config.api + 'contactus/',this.model , { headers: headers })
     .subscribe(Res => {
=======
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.post(Config.api + 'contactus/', this.model, { headers: headers })


      .subscribe(Res => {
>>>>>>> 276de87ca0e77c57d88e43a9ddf4ee1605f86be4
        console.log(Res);
        console.log(this.model);
        swal({
          text: "Thank you for Successflluy Contact Us !",
          title: "Choice Genie",
          type: "success",
          showConfirmButton: false,
          timer: 1200,
          confirmButtonText: "OK",

        })
<<<<<<< HEAD
=======
     //   this.name.clear();
  
        //this.router.navigate(['/pages/login'])
>>>>>>> 276de87ca0e77c57d88e43a9ddf4ee1605f86be4
      },
      
        error => {
          console.log(error);
<<<<<<< HEAD
=======
          //  this.toastr.error(error, null, {toastLife: 5000});
>>>>>>> 276de87ca0e77c57d88e43a9ddf4ee1605f86be4
          swal(
            'Invalid',
            'Please Try Again!',
            'error'
          )

        });
<<<<<<< HEAD
 
=======



>>>>>>> 276de87ca0e77c57d88e43a9ddf4ee1605f86be4
  }


}
