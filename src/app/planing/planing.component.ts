import { Component } from '@angular/core';
import { CrudService } from '../Services/crud.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Planing } from '../Entity/planing.Entity';
import { saveplaning } from '../Entity/saveplaning.Entity';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html',
  styleUrls: ['./planing.component.css']
})
export class PlaningComponent {
  messageCommande=""
  AjouterForm:FormGroup
  userFile:any
  message=""


  constructor(private services : CrudService , private router : Router,private fb:FormBuilder) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
        
    
      duree: new FormControl('',[
        Validators.required,]),
      date: new FormControl('',[
        Validators.required,]),
      prix: new FormControl('',[
          Validators.required,]),
      
         
          emplacement: new FormControl('',[
              Validators.required,]),
                
        description: new FormControl('',[
            Validators.required,]),
        }
     this.AjouterForm = this.fb.group(formControls)
   }
 
   get nom() {return this.AjouterForm.get('nom');} 
  
  get duree() { return this.AjouterForm.get('duree');}
  get date() {return this.AjouterForm.get('date');}

  get prix() {return this.AjouterForm.get('prix');} 
  get emplacement() {return this.AjouterForm.get('epmlacement');} 
  
   addNewplaning() {
    let datas=this.services.getCoachInfo();
    let data = this.AjouterForm.value;
    console.log(data);
    let model:saveplaning=new saveplaning();
  
    console.log(model.id_coach);
    model.id=null;
    model.nom=data.nom;
    model.duree=data.duree;
    model.date=data.date;
    model.prix=data.prix;
    model.emplacement=data.emplacement;
    model.description=data.description;
    model.id_coach=datas?.id
    if (
      data.nom == 0 ||
      data.duree == 0||
      data.date== 0||
      data.prix == 0 ||
      data.emplacement == 0 ||
    
      data.description==0
    ) {
     
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Il y a un champ vide. Veuillez remplir tous les champs.',
          customClass: {
            confirmButton: 'custom-ok-button' // Spécifiez la classe CSS du bouton "OK"
          }
        });
    } else {
      this.services.addPlaning(model).subscribe(
        res => {
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Message envoyé avec succès',
            customClass: {
              confirmButton: 'custom-ok-button' // Spécifiez la classe CSS du bouton "OK"
            }
          }).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
              this.router.navigate(['/mesplaning']).then(() => window.location.reload());
            }
          });
        },
       err=>{
        Swal.fire({
          icon: 'warning',
          title: 'Attention',
          text: 'Service en panne!',
          customClass: {
            confirmButton: 'custom-ok-button' // Spécifiez la classe CSS du bouton "OK"
          }
        });
      }
    );
      
      setTimeout(() => {
        this.messageCommande=""
      }, 3000);
    
    }
  }}