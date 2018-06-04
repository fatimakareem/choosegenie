import { Routes } from '@angular/router';
import { Blog5Component } from './blog5.component';


export const Blog5Routes: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: Blog5Component
        }]
    }
];
