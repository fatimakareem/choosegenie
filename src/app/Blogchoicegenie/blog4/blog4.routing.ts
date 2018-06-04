import { Routes } from '@angular/router';
import { Blog4Component } from './blog4.component';


export const Blog4Routes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: Blog4Component
        }]
    }
];
