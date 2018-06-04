import { Routes } from '@angular/router';
import {SearchCustomerComponent} from './search-customer.component';

export const SearchCustomer: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: SearchCustomerComponent
        }]
    }
];
