import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  IsSalleIn:boolean
  IsClientIn:boolean
  IsCoachIn:boolean
 
  constructor(private service:CrudService,private router:Router) { }

  ngOnInit(): void {
    this.IsClientIn=this.service.isClientIn();
    this.IsCoachIn=this.service.isCoachIn();
    this.IsSalleIn=this.service.isSalleIn();
  }
 

  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['/']).then(() => {
      window.location.reload()
    })
}

afficherAlerteConnexion() {
  Swal.fire({
    title: 'Voulez-vous vous connecter en tant que Client, coach ou Directeur salle de sport ?',
    showCancelButton: true,
    confirmButtonText: 'Client',
    cancelButtonText: 'Coach',
    showDenyButton: true,
    denyButtonText: 'Directeur Salle de sport',
    reverseButtons: true,
    confirmButtonColor: '#6caaa8', // Couleur du bouton Client
    cancelButtonColor: '#6caaa8', // Couleur du bouton Coach
    denyButtonColor: '#6caaa8' // Couleur du bouton Salle de sport
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(['/loginclient']);
    } else if (result.isDenied) {
      this.router.navigate(['/loginsalle']);
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      this.router.navigate(['/logincoach']);
    }
  });
}


// Fonction pour afficher l'alerte de déconnexion
afficherAlerteDeconnexion() {
  Swal.fire({
    title: 'Voulez-vous vous déconnecter ?',
    showCancelButton: true,
    confirmButtonText: 'Déconnexion',
    cancelButtonText: 'Annuler',
    reverseButtons: true,
    confirmButtonColor: '#6caaa8', // Couleur du bouton Déconnexion
    cancelButtonColor: '#6caaa8' // Couleur du bouton Annuler
  }).then((result) => {
    if (result.isConfirmed) {
      // Déconnecter l'utilisateur
      this.logout();
    }
  });
}



}