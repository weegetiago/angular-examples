import { PersonService } from './person/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ListPersonComponent } from './person/list-person/list-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HomeComponent,
    ListPersonComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    AppRoutingModule,
    //HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
