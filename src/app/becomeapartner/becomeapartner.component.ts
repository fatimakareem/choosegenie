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


@Component({
  selector: 'app-becomeapartner',
  templateUrl: './becomeapartner.component.html',
  styleUrls: ['./becomeapartner.component.scss']
})
export class BecomeapartnerComponent implements OnInit {
  today = Date.now();
  state;
  city;
  username;
  confirmpassword;
  signupForm: FormGroup;
  private next: any;
 name;
  partnername;
   desc;
   email;
   date;
  model: any = {};
  normalPattern = '[a-zA-Z0-9_.-]+?';
  digitsOnly = '^[0-9,-]+$';
  // email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

  flag = true;
  // date = new FormControl(new Date());
  constructor(public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'partnername': ['', Validators.compose([Validators.required])],
      'desc': ['', Validators.compose([Validators.required])],
      'email': ['', Validators.compose([Validators.required])],
    });
  }

  onChange(e) {
    alert(e)
  }
  check(e) {
    console.log(this.model)
  }

  becomeapartnerdata(name, email, partnername, desc, date) {
    console.log(name, email, partnername, desc, date);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.post(Config.api + 'becomepartner/', {
      "name": name,
      "partnername": partnername,
      "desc": desc,
      "email": email,
      "date": date

    }, { headers: headers })
      .subscribe(Res => {
        console.log(Res);
        console.log(this.model);
        swal({
          text: "Thank you for Successflluy Contact Us ",
          title: "Choice Genie",
          type: "success",
          showConfirmButton: false,
          timer: 1200,
          confirmButtonText: "OK",

        })
        console.log(this.model);

      },

        error => {
          console.log(error);

          swal(
            'Invalid',
            'Please Try Again!',
            'error'
          )

        });





  }
 



}
