import { Routes } from '@angular/router';
import { Blog2Component } from './blog2.component';


export const Blog2Routes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: Blog2Component
        }]
    }
];
