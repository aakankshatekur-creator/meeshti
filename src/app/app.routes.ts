import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Intro } from './intro/intro';
import { Events } from './events/events';
import { Wedding } from './wedding/wedding';


export const routes: Routes = [
    {
        path: '',
        redirectTo:'welcome',
        pathMatch: 'full'
    },
    {  
        path: 'welcome',
        component: Welcome
    },
    {
        path: 'intro',
        component:Intro
    },
    {
        path: 'events',
        component: Events
    },
    {
        path: 'wedding',
        component: Wedding
    }
   
    
    
];
