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
import { error } from 'util';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  pageSizeOptions;
 
  private sub: Subscription;
  private zip: any;
  prod_loaded = false;
  prods_loaded = false;
  localVar;
  public products: any;
  rating;
  closeResult: string;
  stars;
  record: any = [];
  //    setPage;
  constructor(private http: Http, private pagerService: PagerService, private homeService: HomeService, private route: ActivatedRoute, public sg: SimpleGlobal, private obj: HomeService, private router: Router, private dialog: MatDialog, private data: DataService) {

  }

  // array of all items to be paged
  // pager object
  private allItems: any[];
  pager: any = {};
  home: any = {};
  private id: any[];
  page: any[];
  // paged items
  pagedItems: any[];
  public zip_code;
  public username;
  public customer;


  val;
  ngOnInit() {
      this.username = localStorage.getItem('username');
      this.zip_code = localStorage.getItem('zip');
      this.customer = localStorage.getItem('custum')

      // this.fetchitem();
      // this.  fetchitem();
      const Results = {};
      this.val = "methodName($event[0])"
      // onclick = function (rating) {
      //     console.log(rating);
      // }
      this.profile()


      this.data.currentProducts.subscribe(products => this.sg['products'] = products)
      this.data.currentProducts

      this.sub = this.route.params.subscribe(params => {
          this.zip = +params['zipCode'];
          this.setPage(1);


      });




  }
  btnDeleteClick(id, title, profileurl, profile_logo) {
      this.id = id;
      this.title = title;
      this.profileurl = profileurl;
      this.profile_logo = profile_logo;
      console.log('id : ' + this.id);
  }
  user;

  checked_login() {
      if (localStorage.getItem('custum')) {
          let local = localStorage.getItem('custum');
          return true;
      }
      // else if(localStorage.getItem('custom')) {
      //     return true;
      // }
      else {
          return false;
      }
  }
  profile() {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(Config.api + 'users_profile/' + this.customer + '/', { headers: headers })

          .subscribe(Res => {
              this.data = Res.json();
              console.log(this.data);
              this.user = this.data['user']
          });

  }
  rev: any = [];
  getreview(id) {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(Config.api + 'totalreviews/' + id, { headers: headers })

          .subscribe(Res => {
              this.rev = Res.json()['Total Reviews'];

              console.log(this.rev);

          });

  }

  avrage: any = [];
  avereview(id) {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(Config.api + 'reviewsperproduct/' + id, { headers: headers })

          .subscribe(Res => {
              this.avrage = Res.json()['Results'];
              console.log(this.avrage);

          });

  }
  rate = '';
  get(rating) {
      this.rate = rating;
  }
  reviews(rate, comt, id) {
      if (localStorage.getItem('custum')) {
      console.log(id)
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
      this.http.post(Config.api + 'reviews/' + this.zip_code + '/' + this.user, JSON.stringify({

          "zipcode": this.zip_code,
          "productid": id,
          "user": this.user,
          "rate": this.rate,
          "comment": comt
      }

      ), { headers: headers })

          // this.http.post(Config.api + 'monthly/' + this.zip_code + '/' + this.months + '',{"month": this.months+" Month","custom":"['2','8']"},{ headers: headers })
          .subscribe(Res => {
              console.log(Res)
              swal({
                  type: 'success',
                  title: 'Rewiew Added Successfully',
                  showConfirmButton: false,
                  timer: 1500

              })
            
          })
         
      }
      else  {
          swal(
              'Invalid',
              'User must login First!',
              'error'
          )
          this.router.navigate(['/userlogin/']);
      }
  }
  catagoryId = '';
  title = '';
  cancelation_fee = '';
  fact_sheet = '';
  phone = '';
  plan_information = '';
  price_rate = '';
  profile_logo = '';
  profileurl = '';
  rating_logo = '';
  sign_up = '';
  terms_of_service = '';

  price_500_kwh = '';
  price_2000_kwh = '';
  //Event Binding of Delete Buttons
  btnEditClick(id, title, sign_up, phone, terms_of_service, fact_sheet, cancelation_fee,price_rate, plan_information, rating_logo, profile_logo, profileurl) {
      this.catagoryId = id;

      console.log(this.plan_information)
      this.title = title;
      this.sign_up = sign_up;
      this.phone = phone;
      this.terms_of_service = terms_of_service;
      this.fact_sheet = fact_sheet;
      this.cancelation_fee = cancelation_fee;
    this.price_rate=price_rate
      this.plan_information = plan_information;
      this.rating_logo = rating_logo;

      this.profile_logo = profile_logo;
      this.profileurl = profileurl;
    
      console.log(id, title, sign_up, phone, terms_of_service, fact_sheet, cancelation_fee, plan_information, rating_logo, profile_logo, profileurl)
      console.log('id : ' + this.catagoryId);
  }
  items;
  fetchitem(items) {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json')
      this.http.get(Config.api + 'items_perpage/title/asc/' + items, { headers: headers })

          .subscribe(Res => {
              this.sg['products'] = Res.json()['results'];
              this.data.changeProducts(this.sg['products']);
              this.allItems = this.sg['products'];
              for (let prod of this.sg['products']) {
                  console.log(prod["plan_information"])
                  console.log(prod["price_rate"])
                  prod["plan_information"] = prod["plan_information"].split(',,', 3000);
                  prod["price_rate"] = prod["price_rate"].split('..', 3000);
              }
          });

  }
  sortby(sort) {
      if (sort = "Renewable") {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json')
          this.http.get(Config.api + 'sortrenewable/' + this.zip_code, { headers: headers })

              .subscribe(Res => {
                  this.sg['products'] = Res.json()['Results'];
                  this.data.changeProducts(this.sg['products']);
                  this.allItems = this.sg['products'];
                  for (let prod of this.sg['products']) {
                      console.log(prod["plan_information"])
                      console.log(prod["price_rate"])
                      prod["plan_information"] = prod["plan_information"].split(',,', 3000);
                      prod["price_rate"] = prod["price_rate"].split('..', 3000);
                  }
              });
      }
      else if (sort = "Price") {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json')
          this.http.get(Config.api + 'sortprice/' + this.zip_code, { headers: headers })

              .subscribe(Res => {
                  this.sg['products'] = Res.json()['Results'];
                  this.data.changeProducts(this.sg['products']);
                  this.allItems = this.sg['products'];
                  for (let prod of this.sg['products']) {
                      console.log(prod["plan_information"])
                      console.log(prod["price_rate"])
                      prod["plan_information"] = prod["plan_information"].split(',,', 3000);
                      prod["price_rate"] = prod["price_rate"].split('..', 3000);
                  }
              });
      }
      else if (sort = "Company") {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json')
          this.http.get(Config.api + 'sortcompany/' + this.zip_code, { headers: headers })

              .subscribe(Res => {
                  this.sg['products'] = Res.json()['Results'];
                  this.data.changeProducts(this.sg['products']);
                  this.allItems = this.sg['products'];
                  for (let prod of this.sg['products']) {
                      console.log(prod["plan_information"])
                      console.log(prod["price_rate"])
                      prod["plan_information"] = prod["plan_information"].split(',,', 3000);
                      prod["price_rate"] = prod["price_rate"].split('..', 3000);
                  }
              });
      }

  }
  comp = '';
  checked(val, i) {
      this.searchRecord(val);
      let value = {}
      value = { val };
      console.log(value)
      this.comp = val;
  }
  searchRecord(val) {
      this.record.push(val)
      console.log(this.record)
  }
  Comapreproduct() {

      console.log(this.comp, this.record)
      for (let val in this.record) {
          let value;
          value += val
          console.log(value)
      }
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
      this.http.post(Config.api + 'comparisonproducts/', JSON.stringify({

          "productid": this.record
      }
      ), { headers: headers })

          // this.http.post(Config.api + 'monthly/' + this.zip_code + '/' + this.months + '',{"month": this.months+" Month","custom":"['2','8']"},{ headers: headers })
          .subscribe(Res => {
              console.log(Res)
              //console.log(selectedvalue)
              // console.log(plan_information)
              this.sg['products'] = Res.json()['Results'];
              this.data.changeProducts(this.sg['products']);
              for (let prod of this.sg['products']) {
                  // console.log(prod["plan_information"])
                  // console.log(prod["price_rate"])
                  prod["plan_information"] = prod["plan_information"].split(',,', 3000);
                  prod["price_rate"] = prod["price_rate"].split('..', 3000);
              }

          });
  }



  
  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      const Results = {}

      this.obj.searchProducts1(this.zip, page).subscribe(response => {
          // localStorage.setItem('products',response['Results']);


          this.sg['products'] = response['Results'];

        //   for (let prod of this.sg['products']) {
        //       //console.log(prod["plan_information"])
        //       //console.log(prod["price_rate"])
        //       prod["plan_information"] = prod["plan_information"].split(',,', 3000);
        //       prod["price_rate"] = prod["price_rate"].split('..', 3000);

        //   }

       this.data.changeProducts(this.sg['products']);
          this.prod_loaded = true;
          this.prods_loaded = true;
          //  this.allItems = this.sg['products'];
          //console.clear()
          // console.log(response['Total Result']);
          this.pager = this.pagerService.getPager(response['Total Result'], page, 10);

          //this.setPage(1);
          // initialize to page 1
          // console.log(this.sg['products']);

      }


      );


      // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }
}
