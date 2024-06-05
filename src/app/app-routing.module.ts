import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginCoachComponent } from './login-coach/login-coach.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { RegistercoachComponent } from './registercoach/registercoach.component';
import { LoginclientComponent } from './loginclient/loginclient.component';
import { ListPackComponent } from './list-pack/list-pack.component';
import { DetailpackComponent } from './detailpack/detailpack.component';
import { ProfilclientComponent } from './profilclient/profilclient.component';
import { ListreservationComponent } from './listreservation/listreservation.component';
import { DetailcoachComponent } from './detailcoach/detailcoach.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { PlaningComponent } from './planing/planing.component';

import { ModifierprofilclientComponent } from './modifierprofilclient/modifierprofilclient.component';
import { ListPlaningclientComponent } from './list-planingclient/list-planingclient.component';
import { MesPlaningComponent } from './mes-planing/mes-planing.component';
import { ProfilcoachComponent } from './profilcoach/profilcoach.component';
import { LoginSalleComponent } from './login-salle/login-salle.component';
import { RegisterSalleComponent } from './register-salle/register-salle.component';
import { AjouterPackComponent } from './ajouter-pack/ajouter-pack.component';

import { MesPacksComponent } from './mes-packs/mes-packs.component';
import { ModifierprofilecoachComponent } from './modifierprofilecoach/modifierprofilecoach.component';
import { ProfilesalleComponent } from './profilesalle/profilesalle.component';
import { ModifierprofilesalleComponent } from './modifierprofilesalle/modifierprofilesalle.component';

import { ClientAuthGuard } from './Services/Auth.Services';
import { SalleAuthGuard } from './Services/Auth.Salle.services';
import { CoachAuthGuard } from './Services/Auth.coach.services';



const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent},

  { path:'loginclient',component:LoginclientComponent},
  { path:'logincoach',component:LoginCoachComponent},
  {path:'loginsalle',component:LoginSalleComponent},

  { path:'registerclient',component:RegisterClientComponent},
  { path:'registercoach',component:RegistercoachComponent},
  {path:'registersalle',component:RegisterSalleComponent},

  { path:'listpack',component:ListPackComponent, canActivate: [ClientAuthGuard]},
  { path:'dtailpack/:id',component:DetailpackComponent, canActivate: [ClientAuthGuard]},
  {path:'profileclient',component:ProfilclientComponent, canActivate: [ClientAuthGuard]},
  {path:'profilesalle',component:ProfilesalleComponent, canActivate: [SalleAuthGuard]},
  {path:'profilecoach',component:ProfilcoachComponent, canActivate: [CoachAuthGuard]},
  {path:'listreservation',component:ListreservationComponent, canActivate: [ClientAuthGuard] },
  {path:'detailcoach/:id',component:DetailcoachComponent, canActivate: [ClientAuthGuard]},
  {path:'list-clients',component:ListClientsComponent, canActivate: [CoachAuthGuard] },
  {path:'planing',component:PlaningComponent, canActivate: [CoachAuthGuard]},
 
  {path:'modifierprofilclient/:id',component:ModifierprofilclientComponent, canActivate: [ClientAuthGuard]},
  {path:'listplaningclient',component:ListPlaningclientComponent, canActivate: [ClientAuthGuard]},
  {path:'mesplaning',component:MesPlaningComponent, canActivate: [CoachAuthGuard]},

  {path:'ajouterpack',component:AjouterPackComponent, canActivate: [SalleAuthGuard]},
  
  {path:'mespacks',component:MesPacksComponent, canActivate: [SalleAuthGuard]},
  {path:'modifierprofilecoach/:id',component:ModifierprofilecoachComponent, canActivate: [CoachAuthGuard]},
  {path:'modifierprofilesalle/:id',component:ModifierprofilesalleComponent, canActivate: [SalleAuthGuard]},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
