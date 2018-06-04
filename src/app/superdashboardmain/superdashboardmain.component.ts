import { Component, OnInit } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
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
import { MatSelect, MatDialog } from '@angular/material'; 
 
import { DataService } from '../data.service';

@Component({
  selector: 'app-superdashboardmain',
  templateUrl: './superdashboardmain.component.html',
  styleUrls: ['./superdashboardmain.component.scss']
})
export class SuperdashboardmainComponent implements OnInit {

  data:any=[];
  constructor(private https:Http,public router: Router, private fb: FormBuilder, private http: HttpClient,     
    private route: ActivatedRoute,private sg: SimpleGlobal, 
      private dialog: MatDialog, private dataa: DataService) {
  }

  ngOnInit() {
    this.fetchzip();
  }


  fetchzip() {
    // this.route.params.subscribe(params => {
    //   let zip =  this.sg['product_zipcode'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.https.get('http://127.0.0.1:8000/company_usercount/', { headers: headers })
    
    .subscribe(Res => {
    this.data=Res.json();
    console.log(this.data);
    });
    
    }
}
