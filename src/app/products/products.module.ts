import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { PagerService } from '../pager.service';
import { HttpClientModule } from '@angular/common/http'
import {ProductsComponent, plandetailDialog} from "./products.component";
// import {ExtendedTableComponent} from "../tables/extendedtable/extendedtable.component";
// import {RegularTableComponent} from "../tables/regulartable/regulartable.component";
import {ProductsRoutes} from './products.routing';
import {PremiseDialog} from './products.component';
//import {  plandetailDialog} from './products.component';
import { AngularcliStarRatingModule } from 'angularcli-star-rating'

import { HomeService } from '../home/home.service';
import { SimpleGlobal } from 'ng2-simple-global';
// import { Pipe, PipeTransform } from "@angular/core";
// import { HttpClientModule } from '@angular/common/http'
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProductsRoutes),
        FormsModule,
        AngularcliStarRatingModule,
        // MdModule,
        MaterialModule,
      HttpClientModule
    ],
    declarations: [
        ProductsComponent,
        // ExtendedTableComponent,
        // RegularTableComponent,
        PremiseDialog,
        plandetailDialog,
        //PrettyPlanDetails
    ],
    providers: [
        PagerService,
        SimpleGlobal,
        HomeService
    ],
    entryComponents: [PremiseDialog]
 
})

export class ProductsModule {}
