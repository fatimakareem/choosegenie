import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import {MatDialogModule} from '@angular/material/dialog';
import { changepasswordRoutes } from './changepassword.routing';
import { ChangepasswordComponent } from './changepassword.component';
 

@NgModule({
    imports: [
        MatDialogModule,
        CommonModule,
        RouterModule,
        FormsModule,
        RouterModule.forChild(changepasswordRoutes),
        // MdModule,
        MaterialModule,
    ],
    declarations: [
        ChangepasswordComponent
    ],
    entryComponents:[

    ],
})

export class ChangePasswordModule {}
