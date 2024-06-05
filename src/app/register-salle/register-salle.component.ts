import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Salle } from '../Entity/Salle.Entity';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-register-salle',
  templateUrl: './register-salle.component.html',
  styleUrls: ['./register-salle.component.css']
})
export class RegisterSalleComponent {

  salleForm:FormGroup
  messageCommande=""
  AjouterForm:FormGroup
  userFile:any
  message=""
 
  constructor(private service :CrudService,private router:Router,private fb:FormBuilder,private toast:NgToastService) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      adresse: new FormControl('',[
        Validators.required,]),
        email: new FormControl('',[
          Validators.required,
        Validators.email]),
        telephone: new FormControl( '', [
          Validators.required,]),
        mdp: new FormControl('',[
          Validators.required,]),
     
  
   
   
    }
     this.salleForm = this.fb.group(formControls)
   }
 
   get nom() {return this.salleForm.get('nom');}
  get adresse() { return this.salleForm.get('adresse');}
  get email() {return this.salleForm.get('email');}
  
  get telephone() {return this.salleForm.get('telephone');}
  get mdp() {return this.salleForm.get('mdp');}


   addNewSalle() {
    let data = this.salleForm.value;
    console.log(data);
    let salledesport = new Salle(
     undefined, data.nom,data.adresse, data.email,data.telephone,data.mdp,);
    console.log(salledesport);

    if (
      data.nom == 0 ||
      data.adresse == 0||
      data.email == 0 ||
      data.telephone ==0 ||
      data.mdp == 0
     
 
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Votre champs est obligatoire',
      });
    } else {
    this.service.addNewSalle(salledesport).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'votre compte est ajoutée avec succés',
        });
        setTimeout(() => {
          this.router.navigate(['loginsalle']).then(() => window.location.reload());
        }, 1500);
       
      },
      err=>{
        console.log(err);
        this.toast.error({
          detail: 'Error Message',
          summary: 'email existe déjà',
        }); }
    )

    }
  }


}
