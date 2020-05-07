import { PersonService } from './person.service';
import { Person } from './person.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  whatsappPattern = /^[0-9]*$/
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  formPerson: FormGroup
  personList: Person[]

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private personService: PersonService) { }

  ngOnInit(): void {
    this.formPerson = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      whatsapp: this.formBuilder.control('', [Validators.required, Validators.minLength(11),Validators.pattern(this.whatsappPattern)]),
    })
  }

  insertPerson(){
    let person: Person = {
      name: this.formPerson.controls['name'].value,
      email: this.formPerson.controls['email'].value,
      whatsapp: this.formPerson.controls['whatsapp'].value,
    };
    this.personService.insertPerson(person)
    .subscribe(response => {
      alert(`Cadastro efetuado com sucesso: ${response.name}`)
      this.ngOnInit()
    })
  };

}
