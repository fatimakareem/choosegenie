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
import { Headers, Http, Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { PageEvent } from '@angular/material';
import swal from 'sweetalert2'; 
@Component({
  selector: 'app-getreview',
  templateUrl: './getreview.component.html',
  styleUrls: ['./getreview.component.scss']
})
export class GetreviewComponent implements OnInit {
rev:any=[];
id;
sort;

public customer;
public zip_code;
public title;
private Sub: Subscription;

  constructor(private router: Router,private route: ActivatedRoute,private http: Http) {}

  ngOnInit() {
    this.title = localStorage.getItem('company');
    this.customer = localStorage.getItem('custum')
    this.zip_code = localStorage.getItem('zip');
    this.getreview() 
    this. totalreview()
    this. avereview()
     this.route.params.subscribe ( params => {
       
        this. product(params['id'])
       
        this.hitcount(params['id'])
      });
     
      this.Sub = this.route.params.subscribe(params => {
      this.id= +params['id'];
   
      });
  }
  checked_login() {
    if (localStorage.getItem('custum')) {
        let local = localStorage.getItem('custum');
        return true;
    }
    else {
        return false;
    }
}
data:any=[];
user;
hit:any=[];
sortby(sort){
    console.log(sort)
    if(sort=="newest"){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    this.http.get(Config.api + 'reviewsnewest/'+ this.title  ,{ headers: headers })

        .subscribe(Res => {
           console.log(Res);
           this.rev=Res.json();
           console.log(this.rev)
        });
    }
    else if(sort=="oldest"){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')
        this.http.get(Config.api + 'reviewsoldest/'+ this.title  ,{ headers: headers })
    
            .subscribe(Res => {
               console.log(Res);
               this.rev=Res.json();
    console.log(this.rev)
            });
        }
}
hitcount(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    this.http.get(Config.api + 'counthitsperproduct/'+ id ,{ headers: headers })

        .subscribe(Res => {
           console.log(Res);
           this.hit=Res.json()[0].hits;
           console.log(this.hit)
        });
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
  rate:any=[];
  total:any=[];
  getreview() {
    this.title = localStorage.getItem('company');
    console.log(localStorage.getItem('company'))
    console.log(this.title,'jjjjjjjjj')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(Config.api + 'getallreviews/'+ this.title, { headers: headers })
    .subscribe(Res => {
    this.rev=Res.json()['Results'];
this.total=Res.json()['Total Result'];
console.log(this.total)
    console.log(this.rev)

  
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
      totalreview() {
    
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.get(Config.api + 'totalreviews/'+ this.title , { headers: headers })
      
        .subscribe(Res => {
        this.totalrev=Res.json()['Total Reviews'];

        console.log(this.totalrev);
      
        });
        
        }
      
       avrage:any=[];
       score:any=[];
       ave:any=[];
      avereview() {
    
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.get(Config.api + 'reviewsperproduct/'+this.title , { headers: headers })
      
        .subscribe(Res => {
        this.avrage=Res.json();
        console.log(this.avrage);
      this.score= this.avrage['Product Score'];
      console.log(this.score)
      this.ave=this.avrage['Avg Reviews Per Product']
        });
        
        }
        ratee = '';
        get(rating) {
            this.ratee = rating;
        }
        reviews(ratee, comt, id) {
            if (localStorage.getItem('custum')) {
            console.log(id)
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
            this.http.post(Config.api + 'reviews/' + this.zip_code + '/' + this.user, JSON.stringify({
    
                "zipcode": this.zip_code,
                "productid": id,
                "user": this.user,
                "rate": this.ratee,
                "comment": comt
            }
    
            ), { headers: headers })
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
}
