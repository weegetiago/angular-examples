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

  insertPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(`${API}/person`, person,)
  }

  deletePerson(id: string): Observable<Person>{
    return this.http.delete<Person>(`${API}/person/${id}`)
  }

}
