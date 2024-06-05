import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../Services/crud.service';
import { Coach } from '../Entity/coach.Entity';

@Component({
  selector: 'app-login-coach',
  templateUrl: './login-coach.component.html',
  styleUrls: ['./login-coach.component.css']
})
export class LoginCoachComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private router: Router,
    private toast: NgToastService
  ) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get mdp() { return this.loginForm.get('mdp'); }

  loginCoach() {
    if (this.loginForm.invalid) {
      this.toast.info({
        detail: 'Erreur',
        summary: 'Veuillez remplir tous les champs',
      });
      return;
    }

    let data = this.loginForm.value;
    let coach = new Coach(null, null, null, data.mdp, data.email, null, null);

    this.service.loginCoach(coach).subscribe(
      (res: any) => {
        console.log(res);
        let token = res.token;
        localStorage.setItem("myTokenCoach", token);
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
            detail: 'Votre compte est désactivé',
            summary: 'Erreur',
          });
        } else {
          this.toast.error({
            detail: 'Veuillez réessayer plus tard !',
            summary: 'Erreur',
          });
        }
      }
    );
  }
}
