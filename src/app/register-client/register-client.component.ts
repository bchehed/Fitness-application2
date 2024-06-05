import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../Services/crud.service';
import { Client } from '../Entity/client.Entity';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent {
  ClientForm:FormGroup
  constructor(private service :CrudService,private router:Router,private fb:FormBuilder,private toast:NgToastService) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      prenom: new FormControl('',[
        Validators.required,]),
        mdp: new FormControl('',[
          Validators.required,]),
      email: new FormControl('',[
          Validators.required,
        Validators.email]),
        telephone: new FormControl( '', [
          Validators.required,]),
     age : new FormControl('',[
        Validators.required,
    ]),
  
    }
     this.ClientForm = this.fb.group(formControls)
   }
   get nom() {return this.ClientForm.get('nom');}
  get prenom() { return this.ClientForm.get('prenom');}
  get mdp() {return this.ClientForm.get('mdp');}
  get email() {return this.ClientForm.get('email');}
  get telephone() { return this.ClientForm.get('telephone');}
  get age() {return this.ClientForm.get('age');}


   addNewClient() {
    let data = this.ClientForm.value;
    console.log(data);
    let client = new Client(
     undefined, data.nom,data.prenom,data.mdp, data.email,data.telephone,data.age);
    console.log(client);

    if (
      data.nom == 0 ||
      data.prenom == 0||
      data.mdp == 0||
      data.email == 0 ||
      data.telephone == 0 ||    
      data.age  ==0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Votre champs est obligatoire',
      });
    } else {
    this.service.addNewClient(client).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'votre compte est ajouté avec succés',
        });

        setTimeout(() => {
          this.router.navigate(['loginclient']).then(() => window.location.reload());
        }, 1500);
      },
      err=>{
        console.log(err);
        this.toast.error({
          detail: 'Error Message',
          summary: 'vérifier vos données',
        }); }
    )

    }
  }

}
