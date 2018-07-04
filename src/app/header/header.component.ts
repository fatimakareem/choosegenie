import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Config } from "../Config";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import swal from 'sweetalert2';
import { MatSelect } from '@angular/material';
import { LoginService } from '../pages/login/login.service';
import { ViewChild } from '@angular/core';
import { RecaptchaComponent } from 'recaptcha-blackgeeks';
import { HeaderService } from './header.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public customer;
  public username;
  model: any = {};
  query;
  search;
  zipcode;
  record: any = []
  constructor(private router: Router, private _serv: HeaderService, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }
  checked_login() {
    if (localStorage.getItem('custum')) {
      let local = localStorage.getItem('custum');
      return true;
    }
    else {
      return false;
    }
  }
  check_login() {
    if (localStorage.getItem('user')) {
      let local = localStorage.getItem('user');
      return true;
    }
    else {
      return false;
    }
  }
  move() {
    this.router.navigate(['/consumerdashboard/']);
  }
  moving() {
    this.router.navigate(['/dashboard/' + this.username]);
  }
  ngOnInit() {

    const mainSearch = $('.main-search');
    const formSearch = $('.form-search');

    $('#searchIcon').click(function () {
      $(mainSearch).addClass('active');
      $('body').addClass('noScroll');
      $(formSearch).addClass('flipInX');

      setTimeout(function () {
        $('.form-search .mat-input-element').focus();
      }, 370);

    });

    $('#closeSearch').click(function () {
      $(mainSearch).removeClass('active');
      $('body').removeClass('noScroll');
      $(formSearch).removeClass('flipInX');
    });

    this.username = localStorage.getItem('user')
    console.log(this.username);
    this.customer = localStorage.getItem('custum')
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);

  }
  searchuserdata(query) {
    console.log(query)
    this._serv.searchrecord(query).subscribe(data => {
      this.record = data
      console.log(this.record)
    }, error => {

    })
  }
  
  singlerfp(zipcode){
    let sth = 'products/'+zipcode;
    this.router.navigate([sth]);
    localStorage.setItem('zip', zipcode);
  }
}
