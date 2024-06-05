import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../Services/crud.service';
import { Coach } from '../Entity/coach.Entity';

@Component({
  selector: 'app-registercoach',
  templateUrl: './registercoach.component.html',
  styleUrls: ['./registercoach.component.css']
})
export class RegistercoachComponent {
  CoachForm:FormGroup
  userFile:any
  message=""
  imagePath:any
  imgURL:any
  messageCommande=""
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
      image: new FormControl( '', [
            Validators.required,]),
   
   
    }
     this.CoachForm = this.fb.group(formControls)
   }

   onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
   get nom() {return this.CoachForm.get('nom');}
  get prenom() { return this.CoachForm.get('prenom');}
  get mdp() {return this.CoachForm.get('mdp');}
  get email() {return this.CoachForm.get('email');}
  get telephone() {return this.CoachForm.get('telephone');}
  get image() {return this.CoachForm.get('image');}

   addNewCoach() {
    let data = this.CoachForm.value;
    console.log(data);
    let coach = new Coach( undefined, data.nom,data.prenom,data.mdp, data.email,data.telephone,this.imgURL);
    console.log(coach);

    if (
      data.nom == 0 ||
      data.prenom == 0||
      data.mdp == 0 ||
      data.email == 0 ||
      data.telephone ==0||
      this.imgURL ==0
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'il y a un champ vide!! il faut remplir tous les champs',
      });
    } else {
    this.service.addNewCoach(coach).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'votre compte est ajouté avec succés',
        });

        this.router.navigate(['/logincoach']).then(()=>window.location.reload());
      },
      err=>{
        console.log(err);
        this.toast.success({
          detail: 'coach est ajouté avec succés',
          summary: 'confirmez votre compte (cliquer sur le lien envoyer à votre email)',
        }); }
    )

    }
  }

}
