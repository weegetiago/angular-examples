import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import {PersonComponent} from './person/person.component';
import {ListPersonComponent} from './person/list-person/list-person.component';
import {PersonModalDeleteComponent} from './person/person-modal-delete/person-modal-delete.component';
import {EditPersonComponent} from './person/edit-person/edit-person.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'person', component: PersonComponent},
    {path: 'list-person', component: ListPersonComponent},
    {path: 'person-modal-delete', component: PersonModalDeleteComponent},
    {path: 'list-person/edit-person/:id', component: EditPersonComponent},
]