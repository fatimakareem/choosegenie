import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { BecomepartnerRoutes } from './becomeapartner.routing';
import { BecomeapartnerComponent } from './becomeapartner.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(BecomepartnerRoutes),
        // MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule
    ],
    declarations: [
        BecomeapartnerComponent
    ],
    providers: [

    ]
})

export class BecomeapartnerModule {}
