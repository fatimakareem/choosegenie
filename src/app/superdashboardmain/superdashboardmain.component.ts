import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  results: any = [];
  data: any = [];
  name;
  email;
  subject;
  // <a>{{item.name}}</a>
                      // </h4>
                      // <p>{{item.email}}</p>
                      // <p>{{item.subject}}</p>
  constructor(private https: Http, public router: Router, private fb: FormBuilder, private http: HttpClient,
    private route: ActivatedRoute, private sg: SimpleGlobal,
    private dialog: MatDialog, private dataa: DataService) {
  }

  ngOnInit() {
  this.fetchregister();
    //this.fetchcompany();
    //this.fetchinactiveproducts();
   // this.fetchactiveproducts();
   this.fetchpartner();
    this.fetchcontact();
  }


  fetchregister() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.https.get(Config.api+'countuserproductsrep/', { headers: headers })

      .subscribe(Res => {
        this.results = Res.json();
        console.log(this.results);
      });

  }
   
  contact;
  fetchcontact() {
    // alert (this.data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.https.get(Config.api +'contactfilter/', { headers: headers })

      .subscribe(Res => {
        this.data = Res.json()['Results'];  
        // this.contact = Res.json(['Results']);
        console.log(this.data);
      });

  }
  partner;
  fetchpartner() {
    // alert (this.data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.https.get(Config.api +'partnerfilter/', { headers: headers })

      .subscribe(Res => {
        this.data = Res.json()['Results'];  
        // this.contact = Res.json(['Results']);
        console.log(this.data);
      });

  }
   
}
