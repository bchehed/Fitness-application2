import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { Pack } from '../Entity/pack.Entity';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mes-packs',
  templateUrl: './mes-packs.component.html',
  styleUrls: ['./mes-packs.component.css']
})
export class MesPacksComponent {
  listPack:any=[]
  constructor(private service:CrudService , private router : Router) { }
  
  ngOnInit(): void {
    this.service.getAllPackbySalleId().subscribe((data:any)=>{
      console.log(data)
      this.listPack=data;
    })
  }
  DeletePack(pack: Pack) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: `Voulez-vous supprimer ce planing avec l'ID ${pack.id} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.onDeletePack(pack.id).subscribe(() => {
          Swal.fire('Supprimé!', 'Le\'planing a été supprimé avec succès.', 'success').then(() => window.location.reload());
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', 'La suppression a été annulée :)', 'error');
      }
    });
  }
}
