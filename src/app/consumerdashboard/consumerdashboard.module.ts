import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { ConsumerDashboardRoutes } from './consumerdashboard.routing';
import { ConsumerdashboardComponent } from './consumerdashboard.component';




@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ConsumerDashboardRoutes),
        FormsModule,
        ReactiveFormsModule,
        // MdModule,
        MaterialModule
    ],
    declarations: [ConsumerdashboardComponent]
})

export class ConsumerDashboardModule {}
