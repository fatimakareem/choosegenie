import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../Config';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";

import { ActivatedRoute, Router, RouterModule, NavigationExtras } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { Console } from '@angular/core/src/console';
import swal from 'sweetalert2';
import { TOUCHEND_HIDE_DELAY } from '@angular/material';
// import { HomeRoutes } from '../../home/home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';
import { LoginService } from './login.service';
import { DataService } from '../../data.service';
import { DataloginService } from './datalogin.service';
import { RecaptchaComponent } from 'recaptcha-blackgeeks';
declare var $: any;
declare interface ValidatorFn {
  (c: AbstractControl): {
    [key: string]: any;
  };
}
declare interface User {
  username?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
  password?: string; // required, value must be equal to confirm password.
  confirmPassword?: string; // required, value must be equal to password.
  number?: number; // required, value must be equal to password.
  url?: string;
  idSource?: string;
  idDestination?: string;
  optionsCheckboxes?: boolean;
}
@Component({
  selector: 'app-login-cmp',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  @ViewChild('username') el: ElementRef; captcha: RecaptchaComponent
  statuslogin: any;
  // focusin: boolean = true;
  // rForm: FormGroup;
  // post:any;  
  // usernameAlert:string="Please fill username";
  // passwordAlert:string="Please fill password";
  // loginAlert:string;
  // loginError:boolean=false;
  returnUrl: string;
  hide = true;
  public typeValidation: User;
  register: FormGroup;
  login: FormGroup;
  type: FormGroup;
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  public username;
  public title;
  //username?: string; 
  // login : FormGroup; 
  Email;

  password;


  constructor(public router: Router, private element: ElementRef, private http: Http, private route: ActivatedRoute,
    private sg: SimpleGlobal, private _nav: Router, private _serv: LoginService, private fb: FormBuilder, private https: HttpClient,
    private authenticationservice: DataloginService) {
    // this.rForm = fb.group({
    //   'username' : [null, Validators.required],
    //   'password' : [null, Validators.required],
    // });

    {
      this.nativeElement = element.nativeElement;
      this.sidebarVisible = false;
    }

  }
  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this.isFieldValid(form, field),
      'has-feedback': this.isFieldValid(form, field)
    };
  }
  // addPost(post) {
  //   this.authenticationservice.login(post).subscribe(
  //      res => {
  //        if(res.status == true)
  //          {
  //             this.router.navigate([this.returnUrl]);

  //          }else{
  //            this.loginError = true
  //            this.loginAlert = res.message;
  //          }
  //      },
  //       err => {
  //         swal(
  //               'Error',
  //               'User Does not exist',
  //               'error'
  //             )
  //        return err;


  //      }
  //    );

  //  }


  // onLogin() {
  //   alert("loginis ture");
  //   // console.log(this.login);
  //   if (this.login.valid) {
  //     alert("loginis Flase");
  //     // console.log(this.login.value);
  //     // console.log('form submitted');
  //    // this._serv.login_authenticate(this.login.value.username).subscribe(
  //      // data => {
  //                 //  if(data.status == true)
  //                 //    {
  //                   //  this._nav.navigate(['/dashboard/'+ this.username]);
  //                     //this.router.navigate([this.returnUrl]);


  //    //console.log("user",data);
  //        this._serv.login(this.login.value.username,this.login.value.password).subscribe(
  //          data => {
  //        // this._nav.navigate(['/dashboard/'+ this.username]);
  //   console.log(data);
  //   swal({
  //       type: 'success',
  //       title: 'Successfully Logged in',
  //       showConfirmButton: false,
  //       timer: 1500
  //       });

  //   // this.toastr.success('Successfully!', 'Logged in',{toastLife: 5000});   
  //  // let url = '/';
  //   //this._nav.navigate(['/dashboard/'+ this.username]);
  //   this.router.navigate(['/dashboard/'+ this.username]);
  //          localStorage.setItem('username', this.username);

  //          },
  //     error => {

  //       swal(
  //         'Invalid',
  //         'Username OR Password',
  //         'error'
  //       )

  //     });
  //   //}
  //     //},
  //       error => {
  //        swal(
  //          'Error',
  //         'User does not exist',
  //         'error'
  //       )
  //       }

  //     }
  //         else {
  //     this.validateAllFormFields(this.login);
  //   }
  // }
  result: any = [];
  onLogin() {
    // console.log(this.login);
    if (this.login.valid) {
      // console.log(this.login.value);
      // console.log('form submitted');
      this._serv.login_authenticate(this.login.value.username, this.login.value.password).subscribe(
        data => {
          //  console.log("user",data);
          this._serv.login(this.login.value.username, this.login.value.password).subscribe(
            data => {
              this.result = data;
              console.log(this.result)
              // console.log(data);
              swal({
                type: 'success',
                title: 'Successfully Logged in',
                showConfirmButton: false,
                timer: 1500
              });

              // this.toastr.success('Successfully!', 'Logged in',{toastLife: 5000});   
              //let url = 'find-bids';
              //this._nav.navigate([url]);
              // this._nav.navigate(['/dashboard/'+ this.title]);
              // localStorage.setItem('username', this.title);
              // this._nav.navigate(['/dashboard/'+ this.title]);
              // localStorage.setItem('username', this.title);
              this._nav.navigate(['/dashboard/' + this.username]);
              localStorage.setItem('change', this.username);


            },
            error => {
              // console.log(error);
              // this.toastr.error(error, null, {toastLife: 5000});
              swal(
                'Invalid',
                'Username OR Password',
                'error'
              )

            });

        },
        error => {
          // console.log("eer",error);

          //  this.toastr.error(error.status, null, {toastLife: 5000});
          swal(
            'Error',
            'User does not exist',
            'error'
          )
        }
      );
    }
    else {
      this.validateAllFormFields(this.login);
    }
  }
  model: any = {};
  forgetpass(Email) {
    //alert('hello');
    console.log("CHOICE GENIE", this.username);

    let headers = new HttpHeaders();


    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    // this.https.post(Config.api +'forget_password/' + this.username , JSON.stringify({ "email":Email}), { headers: headers })
    this.https.post(Config.api + 'forget_password/' + this.username, { "email": Email }, { headers: headers })

      //   // this.http.post(Config.api + 'signup/'+ this.zip_code +'', {"premiseid": this.premiseID +'', {headers: headers})
      .subscribe(Res => {
        this.router.navigate(['/forgetpassword/']);
        console.log(Res);
        // this.next = Res[0].next;

        console.log(this.username);

      },
        error => {
          console.log(error);
          //  this.toastr.error(error, null, {toastLife: 5000});
          swal(
            'Invalid',
            'User Already Exist! or May be Some Error!',
            'error'
          )

          //     //    this.state = Res[0].state;
          //     //this.sg['products'] = Res.json()['Results'];
          //     //this.data.changeProducts(this.sg['products']);
          //   f.resetForm();
        });
    //}

    //    this.state = Res[0].state;
    //this.sg['products'] = Res.json()['Results'];
    //this.data.changeProducts(this.sg['products']);


    //}


  }




  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      // console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  ngOnInit() {
    // this.authenticationservice.logout();
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/index';
    this.login = this.fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      username: ['', Validators.compose([Validators.required])],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      password: ['', Validators.compose([Validators.required])],
      // title: ['', Validators.compose([Validators.required])],
      Email: ['', Validators.compose([])],
    });
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 700);
  }
  // sweetalertlogin() {
  //     swal({
  //         text: "Login Successflluy!",
  //         title: "Choice Genie",
  //         type: "success",
  //         showConfirmButton: false,
  //         //     confirmButtonColor: "#DD6B55",
  //         timer: 1200,
  //         confirmButtonText: "OK",

  //     })
  //         this.router.navigate(['/home'])
  // }

  // login(username:any, password:any) {

  //     // this.route.params.subscribe(params => {
  //     //   let zip =  this.sg['product_zipcode'];
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/json');
  //     // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  //     this.http.put(Config.api + 'login/', { "username": this.username, "password": this.password }, { headers: headers })

  //         // this.http.post(Config.api + 'monthly/' + this.zip_code + '/' + this.months + '',{"month": this.months+" Month","custom":"['2','8']"},{ headers: headers })
  //         .subscribe(Res =>

  //         });
  // }
  sidebarToggle() {
    var toggleButton = this.toggleButton;
    var body = document.getElementsByTagName('body')[0];
    var sidebar = document.getElementsByClassName('navbar-collapse')[0];
    if (this.sidebarVisible == false) {
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}
