import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    //TableModule,
    ListPersonComponent,

  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TableModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
