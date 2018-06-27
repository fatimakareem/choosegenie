import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfileService } from './com-profile/profile.service';
import { DeleteBlogService } from './Blogchoicegenie/adminblog/delete-blog.service';
import { EditBlogService } from './Blogchoicegenie/adminblog/edit-blog.service';
import { AngularcliStarRatingModule } from 'angularcli-star-rating'
import { LoaderModule } from '../app/loader/loader.module';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { SuperadminComponent } from './layouts/superadmin/superadmin.component';
import { SupersiderbarComponent } from './supersiderbar/supersiderbar.component';
import { AppComponent } from './app.component';
import { SimpleGlobal } from 'ng2-simple-global';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { CustomerLayoutComponent } from './layouts/customer/customer-layout.component';
import { NormalLayoutComponent } from './layouts/normal/normal-layout.component';
import { AppRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { AboutComponent } from './about/about.component';
// import {StepperOverviewExample} from "./signup/stepper-overview-example";
import { HomeService } from './home/home.service';
import { BrowserModule, BrowserTransferStateModule } from "@angular/platform-browser";
import { DataService } from './data.service';
// import { Ng2CarouselamosModule } from 'ng2-carouselamos';
// import { RegisteredComponent } from './registered/registered.component';
import { LoginComponent } from './../app/pages/login/login.component';
import { Authgaurd2Service } from './authgaurd2.service';
import { Authgaurd3Service } from './authgaurd3.service';

import { LoginService } from './pages/login/login.service';
import { ResidentialService } from './residential/residential-dialog2/residential.service';
import { ContactusComponent } from './contactus/contactus.component';
import { PagerService } from './pager.service';
import { CompanyService } from './company.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StepperOverviewExample } from './signup/stepper-overview-example';
// import { UsersignupComponent } from './usersignup/usersignup.component';
// import { UserloginComponent } from './pages/userlogin/userlogin.component';
import { UserLoginService } from './pages/userlogin/userlogin.service';
import { SuperloginComponent } from './pages/superlogin/superlogin.component';
import { SuperLoginService } from './pages/superlogin/superlogin.service';
import { DeleteService } from './dashboard/delete.service';
import { EditService } from './dashboard/edit.service';
import { OverviewComponent } from './overview/overview.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BecomeapartnerComponent } from './becomeapartner/becomeapartner.component';
import { ChoiceandsavingComponent } from './choiceandsaving/choiceandsaving.component';
import { WhyChocieGenieComponent } from './why-chocie-genie/why-chocie-genie.component';
import { RandomService } from './random.service';
import { ActiveService } from './active.service';
import { EditreviewService } from './superreviews/editreview.service';
import { DeletereviewService } from './superreviews/deletereview.service';

import { SuperviewcontactComponent } from './superviewcontact/superviewcontact.component';
import { SviewapartnerComponent } from './sviewapartner/sviewapartner.component';

import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SuperchangepasswordComponent } from './superchangepassword/superchangepassword.component';
import { ChangepasswordService } from './changepassword.service';
import { SuperchangepaswwordService } from './superchangepassword/superchangepaswword.service';
import { DeletecontactService } from './superviewcontact/deletecontact.service';
import { DeleteviewapartnerService } from './sviewapartner/deleteviewapartner.service';
import { SuperupdateService } from './superdashboard/superupdate.service';
import { DeletesuperdashboardService } from './superdashboard/deletesuperdashboard.service';
import { DataloginService } from './pages/login/datalogin.service';
import { AuthguardService } from './authguard.service';

// import { ActivateaccountComponent } from './activateaccount/activateaccount.component';
import { ConsumersidebarComponent } from './consumersidebar/consumersidebar.component';
import { ConsumeradminComponent } from './layouts/consumeradmin/consumeradmin.component';
import { ConsumerdashboardComponent } from './consumerdashboard/consumerdashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsernavbarComponent } from './shared/usernavbar/usernavbar.component';
import { UserNavbarModule } from './shared/usernavbar/usernavbar.module';
import { UpdateService } from './user-profile/update.service';
import {SuperdashboardmainComponent} from './superdashboardmain/superdashboardmain.component';
// import { SuperdashboardmainComponent } from '././superdashboardmain/superdashboardmain.component';

import { UpdatepartnerService } from './sviewapartner/updatepartner.service';
import { GetreviewComponent } from './getreview/getreview.component';
import { SuperreviewsComponent } from './superreviews/superreviews.component';
import { HeaderService } from './header/header.service';
import { UnsubscribeService } from './unsubscribe/unsubscribe.service';



@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    MatFormFieldModule
  ],
  declarations: [],

})
export class MaterialModule { }

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'PlugExp' }),
    BrowserTransferStateModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularcliStarRatingModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    HttpClientModule,
    MaterialModule,
    MatSelectModule,
    MatNativeDateModule,
    SidebarModule,
    NavbarModule,
    UserNavbarModule,
    FooterModule,
    // Ng2CarouselamosModule,
    FooterModule,
    // CarouselModule.forRoot(),
    BrowserModule,
    LoaderModule,
    //IonicModule.forRoot(AppRoutes),
    //  HttpClientModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CustomerLayoutComponent,
    NormalLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    SuperadminComponent,
    // HomeComponent,
    HeaderComponent,
    UserSidebarComponent,
    SupersiderbarComponent,
    AboutComponent,
    ConsumersidebarComponent,
    ConsumeradminComponent,
    // ChangePasswordComponent,
    StepperOverviewExample,
    // UsersdashboardComponent





  ],
  providers: [
    HomeService,
    HeaderService,
    CompanyService,
    UnsubscribeService,
    SimpleGlobal,
    DataService,
    LoginService,
    PagerService,
    UserLoginService,
    SuperLoginService,
    ResidentialService,
    DeleteBlogService,
    EditService,
    Authgaurd2Service,
    DeleteService,
    ProfileService,
    DeletereviewService,
    EditreviewService,
    ActiveService,
    ChangepasswordService,
    DeletecontactService,
    SuperchangepaswwordService,
    DeleteviewapartnerService,
    SuperupdateService,
    DeletesuperdashboardService,
    DataloginService,
    AuthguardService,
    Authgaurd3Service,
    UpdateService,
    EditBlogService,
    UpdatepartnerService,
    RandomService,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
