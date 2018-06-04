import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../app.module';


import {NewProductComponent} from "./new-product.component";
import {NewProduct} from './new-product.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(NewProduct),
        FormsModule,
        MaterialModule,ReactiveFormsModule
    ],
    declarations: [
      NewProductComponent,
    ],
    entryComponents: []
})

export class NewProductModule {}
