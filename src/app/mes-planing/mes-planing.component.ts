import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { Planing } from '../Entity/planing.Entity';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mes-planing',
  templateUrl: './mes-planing.component.html',
  styleUrls: ['./mes-planing.component.css']
})
export class MesPlaningComponent {
  listPlanning:any=[]
  
  
  constructor(private service:CrudService , private router : Router) { }
  
  ngOnInit(): void {
    this.service.getAllPlanningbyCoachId().subscribe((data:any)=>{
      console.log(data)
      this.listPlanning=data;
    })
  }

  DeletePlanning(planing: Planing) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: `Voulez-vous supprimer ce planing avec l'ID ${planing.id} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.onDeletePlaning(planing.id).subscribe(() => {
          Swal.fire('Supprimé!', 'Le\'planing a été supprimé avec succès.', 'success').then(() => window.location.reload());
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', 'La suppression a été annulée :)', 'error');
      }
    });
  }
}
