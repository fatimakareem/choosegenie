import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Config } from "../Config";
import { Subscription } from 'rxjs/Subscription';
import { CompanyService } from "../company.service";
import { ErrorStateMatcher, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { NgForm, FormControl, Validators, FormGroupDirective } from "@angular/forms";
import { Pipe, PipeTransform } from "@angular/core";
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http, Response } from '@angular/http';
import { HomeService } from "../home/home.service";
import { PagerService } from '../pager.service';
import { ResponseContentType } from '@angular/http/src/enums';
import { Console } from '@angular/core/src/console';
// import {Config} from "../Config";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleGlobal } from 'ng2-simple-global';
// import { ValueUnwrapper } from '@angular/core/src/change_detection/change_detection_util';
//import { Http } from '@angular/http/src/http';
import { PageEvent } from '@angular/material';
import { DeleteService } from '../dashboard/delete.service';
import { DataService } from '../data.service';
import { EditService } from '../dashboard/edit.service';
import { Location } from '@angular/common';
declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/consumerdashboard',
        title: 'UserDashboard',
        type: 'link',
        icontype: 'dashboard'
    },
    
];


@Component({
  selector: 'app-consumersidebar',
  templateUrl: './consumersidebar.component.html',
  styleUrls: ['./consumersidebar.component.scss']
})
export class ConsumersidebarComponent implements OnInit {
  public menuItems: any[];
  constructor(private route: ActivatedRoute, private https: HttpClient, private newService: DeleteService,private serve:EditService,
      private location: Location, private router: Router, private http: Http, private pagerService: PagerService, private homeService: HomeService, private sg: SimpleGlobal, private obj: HomeService, private dialog: MatDialog, private dataa: DataService, private companyService: CompanyService) {
  }
  backClicked() {
      this.location.back();
  }
  pageSizeOptions;
  private allItems: any[];
  pager: any = {};
  home: any = {};
  id: number;
  page: any[];
  pagedItems: any[];
  private sub: Subscription;
  private zip: any;
  prod_loaded = false;
  prods_loaded = false;
  localVar;
  public products: any;
  rating;
  closeResult: string;
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  public username;
  private Sub: Subscription;
  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
  public user;
  ngOnInit() {
     
          this.user = localStorage.getItem('custum')
       
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      
                  console.log(this.menuItems);
  }
 
}
