import { Component, OnInit, ElementRef } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../Config';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { Console } from '@angular/core/src/console';
import swal from 'sweetalert2';
import { TOUCHEND_HIDE_DELAY } from '@angular/material';
// import { HomeRoutes } from '../../home/home.routing';

import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';
import { DataService } from '../../data.service';
import { SuperLoginService } from './superlogin.service';
 
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
  selector: 'app-superlogin',
  templateUrl: './superlogin.component.html',
  styleUrls: ['./superlogin.component.scss']
})
export class SuperloginComponent implements OnInit {
  public typeValidation: User;
  register: FormGroup;
  login: FormGroup;
  type: FormGroup;
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  public username="admin";
  hide=true;
user;
  password;
  constructor(public router: Router, private element: ElementRef, private http: Http, private route: ActivatedRoute,
    private sg: SimpleGlobal, private _nav: Router, private _serv: SuperLoginService, private formBuilder: FormBuilder, private https: HttpClient) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;

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
  loginUser(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(username,password);
    if(username == 'admin' && password =='admin123') {
    
    swal(
      'Successfully! Logged in',
      '',
      'success'
    )
    this.router.navigate(['/supermaindashboard']);
    localStorage.setItem('user', this.username);
   
      localStorage.setItem('currentadmin', JSON.stringify(username));
      // console.log ("junaid",localStorage.getItem('currentUser'))
  }
   
  
           
          else{
            error => {
              console.log(error);
             // this.toastr.error(error, null, {toastLife: 5000});
              swal(
                'Invalid',
                'Username OR Password',
                'error'
              )
           
            };
            
          }


  }
  recaptcha;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.recaptcha = captchaResponse;
    }
  onLogin() {
    // console.log(this.login);
    if (this.login.valid) {
      //console.log(this.login.value);
      // console.log('form submitted');
      // this._serv.login_authenticate(this.login.value.username,this.login.value.password).subscribe(
      //   data => {
          //  console.log("user",data);
          this._serv.login(this.login.value.username, this.login.value.password).subscribe(
            data => {
              console.log(data);
              swal(
                'Successfully! Logged in',
                '',
                'success'
              )
              // this.toastr.success('Successfully!', 'Logged in',{toastLife: 5000});
              this.router.navigate(['/superdashboard/']);
             // this.router.navigate(['/dashboard/'+ this.username]);
              localStorage.setItem('username', this.username);

            },
            error => {
              console.log(error);
             // this.toastr.error(error, null, {toastLife: 5000});
              swal(
                'Invalid',
                'Username OR Password',
                'error'
              )
           
            });

      
    }
    else {
      this.validateAllFormFields(this.login);
    }
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
    this.login = this.formBuilder.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      username: ['', Validators.compose([Validators.required])],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      password: ['', Validators.compose([Validators.required])]
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
