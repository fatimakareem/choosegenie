import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Config } from "../Config";
import { Subscription } from 'rxjs/Subscription';
import { CompanyService } from "../company.service";
import { ErrorStateMatcher, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";

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
// import { DeleteService } from './delete.service';
import { DataService } from '../data.service';
// import { EditService } from './edit.service';
import { NgForm,FormBuilder, FormGroup, Validators, FormControl, AbstractControl,FormGroupDirective,RadioControlValueAccessor } from '@angular/forms';

import swal from 'sweetalert2';
import {NgControl} from '@angular/forms';
 
import { DeletecontactService } from './deletecontact.service';
 
// import { SviewapartnerService } from './sviewapartner.service';


declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }


}

@Component({
  selector: 'app-superviewcontact',
  templateUrl: './superviewcontact.component.html',
  styleUrls: ['./superviewcontact.component.scss']
})
export class SuperviewcontactComponent implements OnInit {
  constructor(private route: ActivatedRoute, private https: HttpClient,
    private formBuilder: FormBuilder,  private router: Router, private http: Http, private newService: DeletecontactService,private pagerService: PagerService, private homeService: HomeService,
     private sg: SimpleGlobal, private obj: HomeService, private dialog: MatDialog, private dataa: DataService) {

      
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
closeResult: string;
name;
 
modal:any=[];
editdata: any = [];
result3:any=[];
dataId = '';
list = 'Hello';
data;
 
comt;
//http://192.168.30.52:9000/choice/contactfilter/


 ngOnInit() {
   // this.showresult();

   this.premiseIdData(1);
   //alert(  this.premiseIdData())

}
btnDeleteClick(id) {
  this.dataId = id;
  console.log('id : ' + this.dataId);
} 
deleteClick(id) {
  console.log('delete' + id);

  //Calling Delete Service
  this.newService.DeleteTodoList(id).subscribe(data => {
      console.log(data);
      this.premiseIdData(1);
     
  }, 
  error => {
  });
//   window.location.reload();

}  
btncomtClick(id) {
  this.comt = id;
  console.log('id : ' + this.comt);
}

premiseIdData(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  //   this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  this.http.get(Config.api + 'contactfilter/' + '?page=' + page, { headers: headers }).subscribe(Res => {
      console.log(Res);
      this.pager = this.pagerService.getPager(Res['Results'], page, 10);

      this.data = Res.json()['Results'];  
  });
  // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
search(name) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  //   this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  this.http.get(Config.api + 'contactussearch/'+ name , { headers: headers }).subscribe(Res => {
      console.log(Res);

      this.data = Res.json();  
  });
  // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}
