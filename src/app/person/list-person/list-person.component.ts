import { Person } from './../person.model';
import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  personList: Person[];
  public person: any;

  constructor(
    private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.listPerson()
      .subscribe(person => this.personList = person)
      console.log(this.personList)
  }

  deletePerson(id: string){
    this.personService.deletePerson(id)
    .subscribe(response => {
      alert('Cadastro deletado com sucesso')
      this.refreshPage()
    })
  };

  listPersonById(id: string){
    this.personService.listPersonById(id)
    .subscribe(response => this.person = response)
  }

  refreshPage(){
    this.personService.listPerson()
      .subscribe(person => this.personList = person)
  };

}
