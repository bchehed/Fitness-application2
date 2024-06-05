import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../Entity/categorie.Entity';
import { CrudService } from '../Services/crud.service';
import { Savepack } from '../Entity/savepack.Entity';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-pack',
  templateUrl: './ajouter-pack.component.html',
  styleUrls: ['./ajouter-pack.component.css']
})
export class AjouterPackComponent {
  messageCommande=""
  AjouterPackForm:FormGroup
  userFile:any
  message=""
  imagePath:any
  imgURL:any
  listcategorie:Categorie[]
  packs:any[]
  constructor(private services : CrudService , private router : Router,private fb:FormBuilder,) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
        
    
      prix: new FormControl('',[
        Validators.required,]),
      image: new FormControl('',[
        Validators.required,]),
        description: new FormControl('',[
          Validators.required,]),
      
         
            categorie: new FormControl('',[
              Validators.required,]),
             
        }
     this.AjouterPackForm = this.fb.group(formControls)
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
   get nom() {return this.AjouterPackForm.get('nom');} 
  
  get prix() { return this.AjouterPackForm.get('prix');}
  get image() {return this.AjouterPackForm.get('image');}

  get description() {return this.AjouterPackForm.get('description');} 
  get categorie() {return this.AjouterPackForm.get('categorie');} 
  
   addNewAjouterPack() {
    let datas=this.services.getSalleInfo();
    let data = this.AjouterPackForm.value;
    console.log(data);
    let model:Savepack=new Savepack();
  
    console.log(model.id_salle);
    model.id=null;
    model.nom=data.nom;
    model.prix=data.prix;
    model.image=this.imgURL;
    model.description=data.description;
    model.id_categorie=+data.categorie;
    model.id_salle=datas?.id
    if (
      data.nom == 0 ||
      data.prix == 0||
      data.image== 0||
      data.description == 0 ||
    
    
      data.categorie==0
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Remplissez votre champ.',
        confirmButtonColor: '#6caaa8' // Couleur du bouton de confirmation
      });
    } else {
    this.services.addpack(model).subscribe(
      res=>{
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Message envoyé avec succès.',
          confirmButtonColor: '#6caaa8' // Couleur du bouton de confirmation
        }).then(() => {
          this.router.navigate(['/ajouterpack']).then(() => {
            window.location.reload();
          });
        });
      },
       err=>{
        Swal.fire({
          icon: 'warning',
          title: 'Attention',
          text: 'Service en panne! Veuillez réessayer plus tard.',
          confirmButtonColor: '#6caaa8' // Couleur du bouton de confirmation
        });
      }
    );
      }
      setTimeout(() => {
        this.messageCommande=""
      }, 3000);
    
    }
  


  ngOnInit(): void {
    this.services.getCategorie().subscribe(categorie=>{this.listcategorie=categorie})
 }
  


}

