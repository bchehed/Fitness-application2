import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../Services/crud.service';
import { Client } from '../Entity/client.Entity';


@Component({
  selector: 'app-loginclient',
  templateUrl: './loginclient.component.html',
  styleUrls: ['./loginclient.component.css']
})
export class LoginclientComponent {
  loginForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private service:CrudService,
    private router:Router,private toast:NgToastService,
  ) { 
    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
        
      ]),
      mdp: new FormControl('',[
        Validators.required,
       
      ])
    }

    this.loginForm = this.fb.group(formControls)
  }

  get email() { return this.loginForm.get('email') }
  get mdp() { return this.loginForm.get('mdp') }
  ngOnInit(): void { 
  }

  loginClient() {
    let data = this.loginForm.value;
    console.log(data);
    let client = new Client(null,null,null,data.mdp,data.email,null,null);
    console.log(client);
    if (
  
      data.email == 0 ||
      data.mdp == 0
    )
    {
      this.toast.info({
        detail: 'Error Message',
        summary: 'il y a un champ vide !! il faut remplir tous les champs',
      });
    } else {
  
      this.service.loginClient(client).subscribe(
        res=>{
          console.log(res);
          let token = res.token;
          localStorage.setItem("myTokenClient",res.token);
          this.toast.success({  detail: 'Succes Message',
          summary: 'Connexion réussie !', });
          setTimeout(() => {
            this.router.navigate(['']).then(() => window.location.reload());
          }, 1500); // Délai de  secondes avant la navigation
        
      },
       
        err=>{
          console.log(err);
          this.toast.error({
            detail: 'Error Message',
            summary: 'Vérifier vos données',
          });
          
        }
      )
      
    }
    
    }
   
  }
