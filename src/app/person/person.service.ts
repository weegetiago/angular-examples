import { Person } from './person.model';
import { API } from './../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  listagemPerson(): Observable<any> {
    return this.http.get(`${API}/person`)
    //.map((response) => response.json())
    //.pipe(map(response => response.json() ))
  }

}
