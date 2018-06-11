import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AboutComponent} from "./about/about.component";
import {CustomerLayoutComponent} from "./layouts/customer/customer-layout.component";
import {NormalLayoutComponent} from "./layouts/normal/normal-layout.component";
import {StepperOverviewExample} from "./signup/stepper-overview-example";
import { LoginComponent } from './pages/login/login.component';
import { TermsComponent } from './terms/terms.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserloginComponent } from './pages/userlogin/userlogin.component';
import { Component } from '@angular/core';
import { SuperloginComponent } from './pages/superlogin/superlogin.component';
import { SuperadminComponent } from './layouts/superadmin/superadmin.component';
import { ActivateaccountComponent } from './activateaccount/activateaccount.component';
import { AuthguardService } from './authguard.service';
import { ConsumeradminComponent } from './layouts/consumeradmin/consumeradmin.component';
import { Authgaurd2Service } from './authgaurd2.service';
import { Authgaurd3Service } from './authgaurd3.service';

// import { UsersdashboardComponent } from './layouts/usersdashboard/usersdashboard.component';

export const AppRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full',
    // },
    {path: "", component: HomeComponent},
    
    // {path: "usersignup", component: UsersignupComponent},
    // {path:"userlogin", component:UserloginComponent},
    // {path:"superlogin", component:SuperloginComponent},
    // {
    //     path: 'activateaccount/:query1',
    //     //redirectTo: 'activateaccount/:query1',
    //     pathMatch: 'full'
      
    // },
   

    {
        path: '',
        component: CustomerLayoutComponent,
        children: [
          {
              path: 'products/:zipCode',
              loadChildren: './products/products.module#ProductsModule'
          },
          

        ]
    },

    {
        path: '',
        component: NormalLayoutComponent,
        children: [
          {
              path: 'commercial',
              loadChildren: './commercial/commercial.module#CommercialModule'
          },
          {path: "activateaccount/:query1",
          loadChildren: './activateaccount/activateaccount.module#ActivateAccountModule'},
          {path: "unsubscribe/:query1",
          loadChildren: './unsubscribe/unsubscribe.module#UnsubscribeModule'},
          {
            path: 'privacy',
            loadChildren: './privacy/privacy.module#PrivacyModule'
        },
        {
            path: 'Review/:id',
            loadChildren: './getreview/getreview.module#GetreviewModule'
        },
          {
            path: 'Become-a-partner',
            loadChildren: './becomeapartner/becomeapartner.module#BecomeapartnerModule'
        },
        {
            path: 'Faqs',
            loadChildren: './faqs/faqs.module#FaqsModule'
        },
        // {
        //     path: 'ChangePassword',
        //     loadChildren: './changepassword/changepassword.module#ChangePasswordModule'
        // },
        // {
        //     path: 'changepassword',
        //     loadChildren: './change-password/change-password.module#ChangePasswordModule'
        // },
        {
            path: 'blog',
            loadChildren: './blog/blog.module#BlogModule'
        },
        {
            path: 'blog/:heading1',
            loadChildren: './Blogchoicegenie/blog1/blog1.module#Blog1Module'
            // loadChildren: './pages/login/login.module#LoginModule'
        },
    
        
        {
            path: 'blog2',
            loadChildren: './Blogchoicegenie/blog2/blog2.module#Blog2Module'
        },
        
        {
            path: 'blog4',
            loadChildren: './Blogchoicegenie/blog4/blog4.module#Blog4Module'
        },
        {
            path: 'blog5',
            loadChildren: './Blogchoicegenie/blog5/blog5.module#Blog5Module'
        },
        {
            path: 'Why-Choice-Genie',
            loadChildren: './why-chocie-genie/whychoicegenie.module#WhyModule'
        },
        {
            path: 'Choice-and-Saving',
            loadChildren: './choiceandsaving/choiceandsaving.module#ChoiceandsavingModule'
        },
          {
              path: 'residential',
              loadChildren: './residential/residential.module#ResidentialModule'
          },
         
          {
            path: 'usersignup',
            loadChildren: './usersignup/usersignup.module#userSignupModule'
        },
        {
            path: 'signup',
            loadChildren: './signup/signup.module#SignupModule'
        },
          {
              path: 'signup/:id',
              loadChildren: './signup/signup.module#SignupModule'
          },            {
              path: 'signup/:id/:product',
              loadChildren: './signup/signup.module#SignupModule'
          },
        //   {
        //     path: 'register',
        //     loadChildren: './signup1/signup1.module#Signup1Module'
        // },
        //   {
        //     path: "new-product",
        //     loadChildren: './admin/new-product/new-product.module#NewProductModule'
        //   },
          {
            path: 'admin/search-customer',
            loadChildren: './admin/search-customer/search-customer.module#SearchCustomerModule'
          },  {
            path: 'adminlogin',
            loadChildren: './pages/superlogin/superlogin.module#LoginModule'
          },
          {
            path: 'login',
            loadChildren: './pages/login/login.module#LoginModule'
          },
           {
            path: 'userlogin',
            loadChildren: './pages/userlogin/userlogin.module#LoginModule'
          },
          {
            path: 'register',
            loadChildren: './signup1/signup1.module#Signup1Module'
        },
          
          {
            path: 'Terms-of-use-and-Privacy',
            loadChildren: './terms/terms.module#termsModule'
          },
          {
            path: 'features-comparison',
            loadChildren: './features-comparison/features.module#FeatureModule'
        },
        // {
        //     path: 'how-it-works',
        //     loadChildren: './how-it-works/how.module#HowModule'
        // },
        {
            path: 'how-it-works',
            loadChildren: './overview/overview.module#OverViewModule'
        },
          {
            path: 'contactus',
            loadChildren: './contactus/contactus.module#contactusModule'
        },
        {
            path: 'forget_password/:qurey',
            loadChildren: './forget_password/forget_password.module#ForgetpasswordModule'
        },
        // {
        //     path: 'ChangePassword',
        //     loadChildren: './changepassword/changepassword.module#ChangePasswordModule'
        // },
        ]
    },
     
    {path: "what-is-ChoiceGenie", component: AboutComponent},
    // {path: "contact", component: ContactusComponent},
    {path: "stepper", component: StepperOverviewExample},
    // {
    //     path: 'dashboard',
    //     redirectTo: 'dashboard'
    // },
    {
        path: '',
        component: ConsumeradminComponent,
        children: [
            {
                path: 'consumerdashboard',canActivate: [Authgaurd2Service],
                loadChildren: './consumerdashboard/consumerdashboard.module#ConsumerDashboardModule'
            },
            {
                path: 'userprofile',canActivate: [Authgaurd2Service],
                loadChildren: './user-profile/user-profile.module#UserModule'
            },
            {
                path: 'ChangePassword',canActivate: [Authgaurd2Service],
                loadChildren: './changepassword/changepassword.module#ChangePasswordModule'
            },
            // {
            //     path: 'SuperChangePassword',
            //     loadChildren: './superchangepassword/superchangepassword.module#ChangePasswordModule'
            // },
            // {
            //     path: 'superviewcontact',
            //     loadChildren: './superviewcontact/superviewcontact.module#superviewcontactModule'
            // },//superviewbecomeModuleng superpartnerModule
            // {
            //     path: 'sviewapartner',
            //     loadChildren: './sviewapartner/sviewapartner.module#partnerModule'
            // }
        ]
    },
    {
        path: '',
        component: SuperadminComponent,
        children: [
            {
                path: 'superdashboard',canActivate: [Authgaurd3Service],
                loadChildren: './superdashboard/superdashboard.module#SuperDashboardModule'
            },
            {
                path: 'admin/reviews',canActivate: [Authgaurd3Service],
                loadChildren: './superreviews/superreviews.module#SuperreviewsModule'
            },
            {
                path: 'superadmin/blog',canActivate: [Authgaurd3Service],
                loadChildren: './Blogchoicegenie/blog3/blog3.module#Blog3Module'
            },//addblogModule
            {
                path: 'addnewblog',canActivate: [Authgaurd3Service],
                loadChildren: './addblog/addblog.module#addblogModule'
            },
            {
                path: 'SuperChangePassword',canActivate: [Authgaurd3Service],
                loadChildren: './superchangepassword/superchangepassword.module#ChangePasswordModule'
            },
            {
                path: 'supermaindashboard',canActivate: [Authgaurd3Service],
                loadChildren: './superdashboardmain/superdashboardmain.module#SuperDashboardmainModule'
            },
            {
                path: 'superviewcontact',canActivate: [Authgaurd3Service],
                loadChildren: './superviewcontact/superviewcontact.module#superviewcontactModule'
            },//superviewbecomeModuleng superpartnerModule
            {
                path: 'sviewapartner',canActivate: [Authgaurd3Service],
                loadChildren: './sviewapartner/sviewapartner.module#partnerModule'
            }
        ]
    },          
    {
        path: '',
        component: AdminLayoutComponent,
      //  canActivate: [AuthguardService], 
        children: [
            {
                path: 'dashboard/:username',canActivate: [AuthguardService],
                loadChildren: './dashboard/dashboard.module#DashboardModule',
               // canActivate: [AuthguardService]
            },
          
            {
                path: "new-product",canActivate: [AuthguardService],
                loadChildren: './admin/new-product/new-product.module#NewProductModule'
            },
            {
                path: "inactive-product",canActivate: [AuthguardService],
                loadChildren: './inactive-product/inactive-product.module#InactiveProductModule'
            },
            {
                path: 'company-profile',canActivate: [AuthguardService],
                loadChildren: './com-profile/com-profile.module#ComProfileModule'
            },
            {
                path: 'ChangePassword1',canActivate: [AuthguardService],
                loadChildren: './changepassword/changepassword.module#ChangePasswordModule'
            },
            
            {
                path: 'components',canActivate: [AuthguardService],
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',canActivate: [AuthguardService],
                loadChildren: './forms/forms.module#Forms'
            },  {
                path: 'maps',canActivate: [AuthguardService],
                loadChildren: './maps/maps.module#MapsModule'
            }, 
            //  {
            //     path: 'calendar',
            //     loadChildren: './calendar/calendar.module#CalendarModule'
            // },
             {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }
        ]
    }, 
    
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
          {
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
          },
          {
            path: 'residential',
            loadChildren: './residential/residential.module#ResidentialModule'
          }
        ]
    }
    
];
