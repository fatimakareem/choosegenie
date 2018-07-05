import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { HomeService } from "./home.service";
import { Subscription } from 'rxjs/Subscription';
import { Http, Response, Headers } from '@angular/http';
// import { applyRedirects } from "@angular/router/src/apply_redirects";
import { Router } from "@angular/router";

import { Config } from "../Config";
import { ActivatedRoute, RouterModule } from "@angular/router";
import swal from 'sweetalert2';
import { SimpleGlobal } from 'ng2-simple-global';
import { DataService } from '../data.service';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
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
      ]

})

export class HomeComponent implements OnInit {
    zipCode = '';
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

        localStorage.setItem('zip', this.zipCode);
    }

    digitsOnly = '^[0-9,-]+$';
    public results: any;
    public zip;
    cord;

    promo = new FormControl('', [
        Validators.pattern(this.digitsOnly)
    ]);
    zip_code = new FormControl('', [
        Validators.pattern(this.digitsOnly)
    ]);
    location = {};
    postalCode;
    setPosition(position) {
        this.location = position.coords;
        // this.Http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords['latitude']+','+position.coords['longitude']+'&sensor=true&key=AIzaSyBHbxM2yDXYy-BUEHhaRJb-cx0Ch91EhT0')
        // this.Http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords['latitude']+','+position.coords['longitude']+'&sensor=true&key=AIzaSyBHbxM2yDXYy-BUEHhaRJb-cx0Ch91EhT0')
        this.Http.get('http://api.geonames.org/findNearbyPostalCodesJSON?lat='+position.coords['latitude']+'&lng='+position.coords['longitude']+'&username=usman.khanbrain &sensor=true&radius=1.5 &maxRows=1')
            
        .subscribe(Res => {
          this.cord = Res.json()['postalCodes'][0]['postalCode'];  
          // this.contact = Res.json(['Results']);
          console.log(this.cord);
                // console.log(Res.json());
                // this.cord = Res.json();
            })

        console.log(position.coords);
    }

    ngOnInit() {

    // this.setPosition(Position);
      
     // this.hits();
     if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
  };
      $('.slick-date').slick({
        slidesToShow: 5,
        autoplaySpeed: 1500,
        autoplay: true,
        prevArrow: '<button class="slick-arrow leftArrow btn-slider btn-slider-left"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-arrow rightArrow btn-slider btn-slider-right"><i class="fa fa-angle-right"></i></button>',
        responsive: [
          {
            breakpoint: 427,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });


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


      

    }
    onKeydown(event) {
      if (event.key === "Enter") {
        this.router.navigate(['/products/' + this.zipCode]);
        localStorage.setItem('zip', this.zipCode);
        console.log(event);
        // this.Checkzipcode();
      }
    }


    Checkzipcode(zipcode1) {
        console.log("CHOICE GENIE", this.model.zipcode1    );
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        this.http.get(Config.api + 'zipcodecheck/' + zipcode1 , { headers: headers })
          .subscribe(data => {
            console.log(data);
            console.log(data['message'], 'hhhhhhhhhhhhhhh')

            this.zipcodeexist = data['message']
         if(this.zipcodeexist =="InValid Zipcode"){
          swal({
          text: "InValid Zipcode",
          title: "Choice Genie",
          type: "error",
          showConfirmButton: false,
          timer: 1200,
          confirmButtonText: "OK",

        })
    }
    else if(this.zipcodeexist =="Valid Zipcode"){
      this.router.navigate(['/products/' + this.zipCode]);
      localStorage.setItem('zip', this.zipCode);
}
else{
  this.router.navigate(['/product/' + this.zipCode]);
}
          },
            error => {
              console.log(error);

              //   f.resetForm();
            });
      }

}