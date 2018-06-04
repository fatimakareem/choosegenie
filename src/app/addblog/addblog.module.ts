import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { AddblogRoutes } from './addblog.routing';
import { AddblogComponent } from './addblog.component';
 

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AddblogRoutes),
        // MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule
    ],
    declarations: [
       AddblogComponent
    ],
    providers: [

    ]
})

export class addblogModule {}
