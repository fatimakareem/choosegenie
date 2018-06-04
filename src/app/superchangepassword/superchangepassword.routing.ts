import { Routes } from '@angular/router';
import { SuperchangepasswordComponent } from './superchangepassword.component';
 
 

 

export const SuperchangepasswordRoutes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: SuperchangepasswordComponent
            }
        ]
    }
];
