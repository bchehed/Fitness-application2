import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LoginCoachComponent } from './login-coach/login-coach.component';
import { RegisterClientComponent } from './register-client/register-client.component';

import { RegistercoachComponent } from './registercoach/registercoach.component';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginclientComponent } from './loginclient/loginclient.component';
import { ListPackComponent } from './list-pack/list-pack.component';
import { DetailpackComponent } from './detailpack/detailpack.component';
import { ProfilclientComponent } from './profilclient/profilclient.component';
import { ListreservationComponent } from './listreservation/listreservation.component';
import { DetailcoachComponent } from './detailcoach/detailcoach.component';
import { ListClientsComponent } from './list-clients/list-clients.component';

import { PlaningComponent } from './planing/planing.component';
import { ProfilcoachComponent } from './profilcoach/profilcoach.component';

import { ModifierprofilclientComponent } from './modifierprofilclient/modifierprofilclient.component';
import { ListPlaningclientComponent } from './list-planingclient/list-planingclient.component';
import { MesPlaningComponent } from './mes-planing/mes-planing.component';
import { RegisterSalleComponent } from './register-salle/register-salle.component';
import { LoginSalleComponent } from './login-salle/login-salle.component';
import { AjouterPackComponent } from './ajouter-pack/ajouter-pack.component';

import { MesPacksComponent } from './mes-packs/mes-packs.component';

import { ProfilesalleComponent } from './profilesalle/profilesalle.component';

import { ModifierprofilecoachComponent } from './modifierprofilecoach/modifierprofilecoach.component';
import { ModifierprofilesalleComponent } from './modifierprofilesalle/modifierprofilesalle.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginclientComponent,
    LoginCoachComponent,
    RegisterClientComponent,
   
    RegistercoachComponent,
        LoginclientComponent,
        ListPackComponent,
        DetailpackComponent,
        ProfilclientComponent,
       
        ListreservationComponent,
                DetailcoachComponent,
                ListClientsComponent,
               
                PlaningComponent,
                ProfilcoachComponent,
              
                ModifierprofilclientComponent,
                               ListPlaningclientComponent,
                               MesPlaningComponent,
                               RegisterSalleComponent,
                               LoginSalleComponent,
                               AjouterPackComponent,
                           
                           
                               MesPacksComponent,
                            
                               ProfilesalleComponent,
                             
                               ModifierprofilecoachComponent,
                               ModifierprofilesalleComponent,
             
              
      
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgToastModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
