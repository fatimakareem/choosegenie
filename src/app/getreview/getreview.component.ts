import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Config } from "../Config";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from "../home/home.service";
import { ErrorStateMatcher, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { NgForm, FormControl, Validators, FormGroupDirective } from "@angular/forms";
import { SimpleGlobal } from 'ng2-simple-global';
import { DataService } from '../data.service';
import * as _ from 'underscore';
import { PagerService } from '../pager.service';
import { Pipe, PipeTransform } from "@angular/core";
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http, Response } from '@angular/http';

// import {Config} from "../Config";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { jsonpCallbackContext } from '@angular/common/http/src/module';
// import { ValueUnwrapper } from '@angular/core/src/change_detection/change_detection_util';
//import { Http } from '@angular/http/src/http';
import { PageEvent } from '@angular/material';
// import { SSL_OP_NO_TICKET } from 'constants';

import swal from 'sweetalert2'; 
@Component({
  selector: 'app-getreview',
  templateUrl: './getreview.component.html',
  styleUrls: ['./getreview.component.scss']
})
export class GetreviewComponent implements OnInit {
rev:any=[];
id;

private Sub: Subscription;
  constructor(private route: ActivatedRoute,private http: Http) {}

  ngOnInit() {
    this.route.params.subscribe ( params => {


      //  console.log('paramsssssssssss',params['username'])
        this.getreview(params['id']) 
        this. product(params['id'])
        this. totalreview(params['id'])
        this. avereview(params['id'])
      });
      //  alert("junaid");
      // this.data.currentProducts.subscribe(products => this.sg['products'] = products)
      // this.data.currentProducts
      this.Sub = this.route.params.subscribe(params => {
      this.id= +params['id'];
     // alert(this.username);
      });
  }
  rate:any=[];
  getreview(id) {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(Config.api + 'getallreviews/'+ id , { headers: headers })
    .subscribe(Res => {
    this.rev=Res.json()['Results'];
    console.log(this.rev)
// this.rate=this.rev['rate'];
//     console.log(this.rate);
  
    });
    
    }
    pro:any=[];
    plan:any=[];    
    product(id) {
    
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(Config.api + 'dataup/'+ id , { headers: headers })
      .subscribe(Res => {
      this.pro=Res.json();
      console.log(this.pro)
      this.plan=this.pro.plan_information.split(',,', 3000);
      console.log(this.plan)
 
      });
      
      }
      totalrev:any=[];
      totalreview(id) {
    
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.get(Config.api + 'totalreviews/'+ id , { headers: headers })
      
        .subscribe(Res => {
        this.totalrev=Res.json()['Total Reviews'];

        console.log(this.totalrev);
      
        });
        
        }
      
       avrage:any=[];
       score:any=[];
       ave:any=[];
      avereview(id) {
    
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.get(Config.api + 'reviewsperproduct/'+id , { headers: headers })
      
        .subscribe(Res => {
        this.avrage=Res.json();
        console.log(this.avrage);
      this.score= this.avrage['Product Score'];
      console.log(this.score)
      this.ave=this.avrage['Avg Reviews Per Product']
        });
        
        }
}
