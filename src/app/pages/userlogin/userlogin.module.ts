import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';


// import {SignupRoutes} from "./login.routing";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
// import { SweetAlertService } from 'ng2-sweetalert2';
import { LoginRoutes } from './userlogin.routing';
import { DataService } from '../../data.service';
import { UserloginComponent } from './userlogin.component';
import { BlackgeeksRecaptchaModule } from 'recaptcha-blackgeeks';
import { RecaptchaModule } from 'ng-recaptcha';



@NgModule({
    imports: [
        CommonModule,
        RecaptchaModule.forRoot(),
        RouterModule.forChild(LoginRoutes),
        BlackgeeksRecaptchaModule,

        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule,
            
    ],
    declarations: [UserloginComponent],
    providers: [
        // SweetAlertService,
        DataService
    ]
})

export class LoginModule {}

