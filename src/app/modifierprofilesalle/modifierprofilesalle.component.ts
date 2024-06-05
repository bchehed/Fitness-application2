import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Salle } from '../Entity/Salle.Entity';
import { CrudService } from '../Services/crud.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-modifierprofilesalle',
  templateUrl: './modifierprofilesalle.component.html',
  styleUrls: ['./modifierprofilesalle.component.css']
})
export class ModifierprofilesalleComponent {
  updateProfileSalle: FormGroup;
  id: number;
  currentSalledesport = new Salle()
  userFile: any;
  public imagePath: any;
  salleDetails:any;
  
 
  public message!: string;
  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute,
    private toast:NgToastService
  ) {
    this.salleDetails = this.service.salleDetails();
    let formControles = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z .'-]+"), 
        Validators.minLength(4),
      ]),
      
      adresse: new FormControl('', [Validators.required]),
   
      email: new FormControl('', [Validators.required]),

      telephone: new FormControl('', [Validators.required]),
      mdp: new FormControl('', [Validators.required]),
      
    };
    this.updateProfileSalle = this.fb.group(formControles);
  }

  get nom() {
    return this.updateProfileSalle.get('nom');
  }
  get adresse() {
    return this.updateProfileSalle.get('adresse');
  }
  
 
  get email() {
    return this.updateProfileSalle.get('email');
  }

  get telephone() {
    return this.updateProfileSalle.get('telephone');
  }

  get mdp() {
    return this.updateProfileSalle.get('mdp');
  }

  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;
    this.service.findSalleById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateProfileSalle.patchValue({
        nom: event.nom,
        adresse: event.adresse,
     
        email: event.email,
      
        telephone: event.telephone,
        mdp: event.mdp, });}); }
  updateSalle() {
    let data = this.updateProfileSalle.value;
    let salledesport =new Salle(
      this.id,
      data.nom,
      data.adresse,
  
      data.email,
    
      data.telephone,
      data.mdp,
       );
    console.log(salledesport);
    console.log(data);
    this.service.updateSalle(this.id,salledesport).subscribe((res) => {
      console.log(res);
      this.toast.success({
        detail: 'Succes Message',
        summary: 'Profil mis à jour avec succès!',
      });
      this.route.navigate(['/profilesalle'])}); }
}
