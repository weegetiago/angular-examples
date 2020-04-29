import { PersonService } from './person/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HomeComponent,
    ListPersonComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
