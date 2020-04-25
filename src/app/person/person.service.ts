import { Person } from './person.model';
import { API } from './../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  listPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(`${API}/person`)
  }

  insertPerson(person: Person): Observable<any> {
    return this.http.post(`${API}/person`, person,)
  }

}
