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
import {DialogModule} from 'primeng/dialog';
import { ListPersonComponent } from './person/list-person/list-person.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonModalDeleteComponent } from './person/person-modal-delete/person-modal-delete.component';
import { EditPersonComponent } from './person/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HomeComponent,
    ListPersonComponent,
    HeaderComponent,
    FooterComponent,
    PersonModalDeleteComponent,
    EditPersonComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
