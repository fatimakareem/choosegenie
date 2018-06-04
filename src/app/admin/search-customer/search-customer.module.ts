import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MdModule } from '../../md/md.module';
import { MaterialModule } from '../../app.module';


import {SearchCustomerComponent} from "./search-customer.component";
import {SearchCustomer} from './search-customer.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SearchCustomer),
        FormsModule,
        // MdModule,
        MaterialModule
    ],
    declarations: [
      SearchCustomerComponent,
    ],
    entryComponents: []
})

export class SearchCustomerModule {}
