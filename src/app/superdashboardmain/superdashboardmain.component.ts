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

  data: any = [];
  constructor(private https: Http, public router: Router, private fb: FormBuilder, private http: HttpClient,
    private route: ActivatedRoute, private sg: SimpleGlobal,
    private dialog: MatDialog, private dataa: DataService) {
  }

  ngOnInit() {
    this.fetchregister();
    this.fetchcompany();
    this.fetchinactiveproducts();
    this.fetchactiveproducts();
    this.fetchcontact();
  }


  fetchregister() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.https.get('http://192.168.29.193:9000/choice/totalusers/', { headers: headers })

      .subscribe(Res => {
        this.data = Res.json();
        console.log(this.data);
      });

  }
  item;
  fetchcompany() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.https.get('http://192.168.29.193:9000/choice/companytitle/', { headers: headers })

      .subscribe(Res => {
        this.item = Res.json();
        console.log(this.item);
      });

  }
  contact;
  fetchcontact() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.https.get(Config+'contactfilter/', { headers: headers })

      .subscribe(Res => {
        this.contact = Res.json();
        console.log(this.contact);
      });

  }
  inactive;
  fetchinactiveproducts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.https.get( 'http://192.168.29.193:9000/choice/totalinactive/', { headers: headers })

      .subscribe(Res => {
        this.inactive = Res.json();
        console.log(this.inactive);
      });

  }
  active;
  fetchactiveproducts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.https.get( 'http://192.168.29.193:9000/choice/totalactive/', { headers: headers })

      .subscribe(Res => {
        this.active = Res.json();
        console.log(this.active);
      });

  }
}
