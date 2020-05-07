import { Person } from './../person.model';
import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  person: Person [];
  formPerson: FormGroup;
  whatsappPattern = /^[0-9]*$/;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    //private router: Route,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.personService.listPersonById(id)
    .subscribe(response => {
      this.person = response });

    this.formPerson = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      whatsapp: this.formBuilder.control('', [Validators.required, Validators.minLength(11),Validators.pattern(this.whatsappPattern)]),
    });
  }

  public updatePerson(){

  }

  deletePerson(id: string){
    this.personService.deletePerson(id)
    .subscribe(response => {
      alert('Cadastro deletado com sucesso')
    })
  };

  public cancel(){
    //this.router.navigate(['/persons'])
  }

  editPerson(id: string){
    
  }



}
