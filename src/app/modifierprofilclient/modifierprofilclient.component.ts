import { Component } from '@angular/core';
import { CrudService } from '../Services/crud.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { Client } from '../Entity/client.Entity';

@Component({
  selector: 'app-modifierprofilclient',
  templateUrl: './modifierprofilclient.component.html',
  styleUrls: ['./modifierprofilclient.component.css']
})
export class ModifierprofilclientComponent {
  id: number; 
  currentClient = new Client()
  userFile: any;
  public imagePath: any;
 
  public message!: string;
  clientDetails: any;
  updateprofilclient: FormGroup;

  constructor(private service :CrudService, private fb: FormBuilder, private toast:NgToastService,
  
    private route: Router,
    private router: ActivatedRoute) {
    this.clientDetails = this.service.clientDetails();
  
    let formControles = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z .'-]+"), 
        Validators.minLength(4),
      ]),
      
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mdp: new FormControl('', [Validators.required]),
   

    
      telephone: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      
    };
    this.updateprofilclient = this.fb.group(formControles);
  }

  get nom() {
    return this.updateprofilclient.get('nom');
  }
  get prenom() {
    return this.updateprofilclient.get('prenom');
  }
  get email() {
    return this.updateprofilclient.get('email');
  }
  get mdp() {
    return this.updateprofilclient.get('mdp');
  }

  get telephone() {
    return this.updateprofilclient.get('telephone');
  }
 
  get age() {
    return this.updateprofilclient.get('age');
  }



  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;
    this.service.findClientById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateprofilclient.patchValue({
        nom: event.nom,
        prenom: event.prenom,
        email: event.email,
        mdp: event.mdp,
       
        telephone: event.telephone,
        age: event.age,
       });}); }
  updateClient() {
    let data = this.updateprofilclient.value;
    let client =new Client(
      this.id,
      data.nom,
      data.prenom,
      data.email,
      data.mdp,
     
      data.telephone,
      data.age,
      
       );
    console.log(client);
    console.log(data);
    this.service.updateClient(this.id,client).subscribe(() => {
    
      this.toast.success({
        detail: 'Succes Message',
        summary: 'Profil mis à jour avec succès!',
      });
      this.route.navigate(['/profileclient']).then(() => {
        window.location.reload()
      })
    })
    
    }}