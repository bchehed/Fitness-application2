import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Coach } from '../Entity/coach.Entity';
import { CrudService } from '../Services/crud.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-modifierprofilecoach',
  templateUrl: './modifierprofilecoach.component.html',
  styleUrls: ['./modifierprofilecoach.component.css']
})
export class ModifierprofilecoachComponent {
  updateProfileCoach: FormGroup;
  id: number;
  currentCoach = new Coach()
  userFile: any;
  public imagePath: any;
  imgURL:any
  public message!: string;
  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute,
    private toast:NgToastService
  ) {
    let formControles = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z .'-]+"), 
        Validators.minLength(4),
      ]),
      
      prenom: new FormControl('', [Validators.required]),
      mdp: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),

      
   
      telephone: new FormControl('', [Validators.required]),
      
    };
    this.updateProfileCoach = this.fb.group(formControles);
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
  get nom() {
    return this.updateProfileCoach.get('nom');
  }
  get prenom() {
    return this.updateProfileCoach.get('prenom');
  }
  get mdp() {
    return this.updateProfileCoach.get('mdp');
  }
 
  get email() {
    return this.updateProfileCoach.get('email');
  }

  get telephone() {
    return this.updateProfileCoach.get('telephone');
  }



  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;
    this.service.findCoachById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateProfileCoach.patchValue({
        nom: event.nom,
        prenom: event.prenom,
        mdp: event.mdp,
        email: event.email,
      
        telephone: event.telephone, });}); }
  updateCoach() {
    let data = this.updateProfileCoach.value;
    let coach =new Coach(
      this.id,
      data.nom,
      data.prenom,
      data.mdp,
      data.email,
    
      data.telephone,
      
       );
    console.log(coach);
    console.log(data);
    this.service.updateCoach(this.id,coach).subscribe((res) => {
      console.log(res);
      this.toast.success({
        detail: 'Succes Message',
        summary: 'Profil mis à jour avec succès!',
      });
      this.route.navigate(['/profilecoach'])}); }

}
