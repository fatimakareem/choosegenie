import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { GetreviewComponent } from './getreview.component';
import { GetreviewRoutes } from './getreview.routing';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(GetreviewRoutes),
        // MdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule,
            RoundProgressModule
            
    ],
    declarations: [
        GetreviewComponent
    ],
    providers: [

    ]
})

export class GetreviewModule {}
