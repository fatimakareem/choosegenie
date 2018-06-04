import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {LoaderModule} from '../loader/loader.module';

const MainpageRoutes: Routes = [ 
 { path: '', redirectTo: 'home', pathMatch: 'full' },  
{ path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    RouterModule.forChild(MainpageRoutes)

  ],
  declarations: []
})
export class HomeModule { }
