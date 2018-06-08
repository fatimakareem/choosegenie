
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { HomeService } from "./home.service";
import { Subscription } from 'rxjs/Subscription';
import { Http, Response, Headers } from '@angular/http';
import { applyRedirects } from "@angular/router/src/apply_redirects";
import { Router } from "@angular/router";

import { Config } from "../Config";
import { ActivatedRoute, RouterModule } from "@angular/router";
import swal from 'sweetalert2';
import { SimpleGlobal } from 'ng2-simple-global';
import { DataService } from '../data.service';
// import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
//import { setTimeout } from 'timers';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
// import { Http } from '@angular/http/src/http';

declare var $;

export class errorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [
        // { provide: CarouselConfig, useValue: { interval: 3500, noPause: true, showIndicators: true } }
      ]


})

export class HomeComponent implements OnInit {
    zipCode = '';
    //matcher = new errorMatcher();
    product_id;
    premiseID;
    signup;
    city;
    state;
    items;
    private sub: Subscription;
    model: any = {};
    zipcodeexist;
    public products: any;

    constructor(private obj: HomeService, private router: Router, private route: ActivatedRoute,private http: HttpClient, public sg: SimpleGlobal, private data: DataService, private Http: Http) {

    }


    onSubmit(f: NgForm) {
      

       // this.router.navigate(['/products/' + this.zipCode]);
        localStorage.setItem('zip', this.zipCode);
    }

    digitsOnly = '^[0-9,-]+$';
    //  public model: any = {};
    public results: any;
    public zip;

    promo = new FormControl('', [
        Validators.pattern(this.digitsOnly)
    ]);
    zip_code = new FormControl('', [
        Validators.pattern(this.digitsOnly)
    ]);
    location = {};
    setPosition(position) {
        //this.location = position.coords;
         //this.Http.get('http://api.geonames.org/findNearbyPostalCodesJSON?lat='+position.coords['latitude']+'&lng='+position.coords['longitude']+'&username=usman.khanbrain &sensor=true&radius=1.5 &maxRows=1')

      //  .subscribe(Res => {
            //    console.log(Res.json());
           // })

        //console.log(position.coords);
    }
    ngOnInit() {
      $('.slick-date').slick({
        slidesToShow: 3,
        autoplaySpeed: 1500,
        autoplay: true,
        prevArrow: '<button class="slick-arrow leftArrow btn-slider btn-slider-left"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-arrow rightArrow btn-slider btn-slider-right"><i class="fa fa-angle-right"></i></button>',
        responsive: [
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });


       // this.premiseIdData();
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        // };

        // $('.slick-testimonal').slick({
        //     slidesToShow: 2,
        // });

    $('.slick-testimonal').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        prevArrow: '<button class="slick-arrow leftArrow btn-slider btn-slider-left"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-arrow rightArrow btn-slider btn-slider-right"><i class="fa fa-angle-right"></i></button>'
      });

      $('.slick-testimonal').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slider-tagline').hide(10);
        $('.slider-tagline').show(5);
      });




        //alert("i am here")

    }
    Checkzipcode(zipcode1) {
        //alert('hello');
        console.log("CHOICE GENIE", this.model.zipcode1    );
        // alert("REP_certificate_id1"+this.REP_certificate_id);
    
        let headers = new HttpHeaders();
    
    
        headers.append('Content-Type', 'application/json');
        // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
        // http://192.168.30.193:9000/choice/
        this.http.get(Config.api + 'zipcodecheck/' + zipcode1 , { headers: headers })
    
    
          //   // this.http.post(Config.api + 'signup/'+ this.zip_code +'', {"premiseid": this.premiseID +'', {headers: headers})
          .subscribe(data => {
            console.log(data);
            // this.next = Res[0].next;
            console.log(data['message'], 'hhhhhhhhhhhhhhh')

            this.zipcodeexist = data['message']
         if(this.zipcodeexist =="InValid Zipcode"){
          swal({
          text: "InValid Zipcode",
          title: "Choice Genie",
          type: "error",
          showConfirmButton: false,
          //     confirmButtonColor: "#DD6B55",
          timer: 1200,
          confirmButtonText: "OK",

        })
    }
    else if(this.zipcodeexist =="Valid Zipcode"){
      this.router.navigate(['/products/' + this.zipCode]);
}
             
            //  console.log(this.usernameexist);
    
          },
            error => {
              //   this.usernameexist=error['status']
              console.log(error);
              
              //   f.resetForm();
            });
         
    
    
      }
    // premiseIdData() {

    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     //   this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    //     this.Http.get(Config.api + 'data_against_zipcode/75001', { headers: headers })
    //         .subscribe(Res => {
    //             console.log(Res);

    //             // localStorage.setItem("signupDetails", JSON.stringify(Res));
    //             // localStorage.setItem("signedupcompanyid", this.product_id);
    //             //localStorage.setItem("consumerPremiseID", this.premiseID);

    //             //   return JSON.parse(localStorage.getItem("premiseID"))
    //             this.sg['products'] = Res.json()['Results'];
    //             this.data.changeProducts(this.sg['products']);
    //             for (let prod of this.sg['products']) {
    //                 // console.log(prod["plan_information"])
    //                 // console.log(prod["price_rate"])
    //                 prod["plan_information"] = prod["plan_information"].split(',,', 3000);
    //                 prod["price_rate"] = prod["price_rate"].split('..', 3000);
    //               }


    //             setTimeout(function(){
    //                 $('.autoplay').slick({

    //                     slidesToShow: 3,
    //                     slidesToScroll: 1,
    //                     // autoplay: true,
    //                    //prevArrow:'<button class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>',
    //                  //   nextArrow:'<button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>'
    //                     prevArrow:'<button _ngcontent-c0="" ngxcarouselprev="" class="leftRs buttons btn btn-rose btn-xs" style="display: block;"><i _ngcontent-c0="" class="material-icons">keyboard_arrow_left</i> </button>',
    //                     nextArrow:'<button _ngcontent-c0="" ngxcarouselnext="" class="rightRs buttons btn btn-rose btn-xs" style="display: block;"><i _ngcontent-c0="" class="material-icons">keyboard_arrow_right</i> </button>'
    //                   });
    //             }, 50);
    //         });
    // }
}

