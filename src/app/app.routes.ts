import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import {PersonComponent} from './person/person.component';
import {ListPersonComponent} from './person/list-person/list-person.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'person', component: PersonComponent},
    {path: 'list-person', component: ListPersonComponent},
]