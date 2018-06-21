import { Component, OnInit } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
// import {ContactUsService} from "./contact-us.service";
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
  // Validators.pattern('[a-zA-Z]+?')

  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PHONE_REGEX)
  ]);

  subjectFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z-0-9 _.]+?')
  ]);
  constructor(public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }

  //constructor() { }


  ngOnInit() {
    this.signupForm = this.fb.group({
      //['', Validators.compose([Validators.required])],
      'name': ['', Validators.compose([Validators.required])],
      'mobno': ['', Validators.compose([Validators.required])],
      'msg': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],

      // 'Phone': ['', Validators.compose([Validators.required, Validators.pattern(this.digitsOnly)])],
      // 'country': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],

    });
  }

  onChange(e) {
    alert(e)
  }
  check(e) {
    console.log(this.model)
  }

  Contactuserdata() {
    //alert('hello');
    console.log("CHOICE GENIE", this.model);

    let headers = new HttpHeaders();


    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.post(Config.api + 'contactus/', this.model, { headers: headers })


      .subscribe(Res => {
        console.log(Res);
        // this.next = Res[0].next;

        console.log(this.model);
        swal({
          text: "Thank you for Successflluy Contact Us !",
          title: "Choice Genie",
          type: "success",
          showConfirmButton: false,
          //     confirmButtonColor: "#DD6B55",
          timer: 1200,
          confirmButtonText: "OK",

        })
     //   this.name.clear();
        // this.model.clear();
        //this.router.navigate(['/pages/login'])
      },
        error => {
          console.log(error);
          //  this.toastr.error(error, null, {toastLife: 5000});
          swal(
            'Invalid',
            'Please Try Again!',
            'error'
          )

        });



  }


}
