import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../Config';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { ErrorStateMatcher, MatStepper } from '@angular/material';

import { ActivatedRoute, Router, RouterModule, NavigationExtras } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { Console } from '@angular/core/src/console';
import swal from 'sweetalert2';
import { TOUCHEND_HIDE_DELAY } from '@angular/material';
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
  Email;

  password;


  constructor(public router: Router, private element: ElementRef, private http: Http, private route: ActivatedRoute,
    private sg: SimpleGlobal, private _nav: Router, private _serv: LoginService, private fb: FormBuilder, private https: HttpClient,
    private authenticationservice: DataloginService) {
    
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
  
  result: any = [];
  onLogin() {
  
    if (this.login.valid) {
      this._serv.login_authenticate(this.login.value.username, this.login.value.password).subscribe(
        data => {
        
          this._serv.login(this.login.value.username, this.login.value.password).subscribe(
            data => {
              this.result = data;
              console.log(this.result)
           
              swal({
                type: 'success',
                title: 'Successfully Logged in',
                showConfirmButton: false,
                timer: 1500
              });
              this._nav.navigate(['/dashboard/' + this.username]);
              localStorage.setItem('change', this.username);


            },
            error => {
              swal(
                'Invalid',
                'Username OR Password',
                'error'
              )

            });

        },
        error => {
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
  recaptcha;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.recaptcha = captchaResponse;
    }
  model: any = {};
  forgetpass(Email) {
    console.log("CHOICE GENIE", this.username);

    let headers = new HttpHeaders();
     headers.append('Content-Type', 'application/json');
    this.https.post(Config.api + 'forget_password/' + this.username, { "email": Email }, { headers: headers })

      .subscribe(Res => {
        this.router.navigate(['/forgetpassword/']);
        console.log(Res);
       console.log(this.username);

      },
        error => {
          console.log(error);
       
          swal(
            'Invalid',
            'User Already Exist! or May be Some Error!',
            'error'
          )

        });
  
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
    this.login = this.fb.group({
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
