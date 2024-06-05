import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Salle } from '../Entity/Salle.Entity';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-login-salle',
  templateUrl: './login-salle.component.html',
  styleUrls: ['./login-salle.component.css']
})
export class LoginSalleComponent {
  loginSalleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private router: Router,
    private toast: NgToastService
  ) { 
    this.loginSalleForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
    });
  }

  get email() { return this.loginSalleForm.get('email'); }
  get mdp() { return this.loginSalleForm.get('mdp'); }

  loginSalle() {
    if (this.loginSalleForm.invalid) {
      this.toast.info({
        detail: 'Erreur',
        summary: 'Veuillez remplir tous les champs',
      });
      return;
    }

    let data = this.loginSalleForm.value;
    let salle = new Salle(null, null, null, data.email, null, data.mdp, null);

    this.service.loginSalledesport(salle).subscribe(
      (res: any) => {
        console.log(res);
        let token = res.token;
        localStorage.setItem("myTokenSalle", token);
        this.toast.success({  
          detail: 'Connexion réussie',
          summary: 'Succès !', 
        });
        setTimeout(() => {
          this.router.navigate(['']).then(() => window.location.reload());
        }, 1500);
      },
      err => {
        if (err.error.message === "Votre compte est désactivé") {
          this.toast.error({
            detail: 'Attendez la confirmation de votre compte',
            summary: 'Erreur',
          });
        } else {
          this.toast.error({
            detail: 'Vérifiez vos données !',
            summary: 'Erreur',
          });
        }
      }
    );
  }
}
