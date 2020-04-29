import { Person } from './../person.model';
import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  personList: Person[]

  constructor(
    private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.listPerson()
      .subscribe(person => this.personList = person)
      console.log(this.personList)

  }


}
