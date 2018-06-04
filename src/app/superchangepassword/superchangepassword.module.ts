import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import {MatDialogModule} from '@angular/material/dialog';
import { SuperchangepasswordRoutes } from './superchangepassword.routing';
import { SuperchangepasswordComponent } from './superchangepassword.component';

 
 

@NgModule({
    imports: [
        MatDialogModule,
        CommonModule,
        RouterModule,
        FormsModule,
        RouterModule.forChild(SuperchangepasswordRoutes),
        // MdModule,
        MaterialModule,
    ],
    declarations: [
        SuperchangepasswordComponent
    ],
    entryComponents:[

    ],
})

export class ChangePasswordModule {}
