import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { Coach } from '../Entity/coach.Entity';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detailcoach',
  templateUrl: './detailcoach.component.html',
  styleUrls: ['./detailcoach.component.css']
})
export class DetailcoachComponent {

  
    messageCommande=""
    id: number;
    
    event: any={};
      constructor(private service:CrudService,private route:Router ,private activatedRoute: ActivatedRoute) {
        
        
      }
    
      ngOnInit(): void {
        let id=this.activatedRoute.snapshot.params['id']
        this.service.findCoachById(id).subscribe(coach => {
          this.event = coach
         console.log(coach);
        });
        
      }
      reserverCoach(event:any)
    {Swal.fire({
      title: 'Veuillez patienter ...',
      icon: 'info',
      showConfirmButton: false,
      customClass: {
        confirmButton: 'custom-ok-button' // Spécifiez la classe CSS du bouton "OK"
      }
    });
    
    let datas = this.service.getClientInfo();
    let rq: any = {};
    rq.id_client = datas?.id;
    rq.id_coach = event.id;
    
    this.service.reserverCoachFromApi(rq).subscribe((data: any) => {
      Swal.fire({
        title: 'Réservé avec succès',
        icon: 'success',
       
      }).then(() => {
        this.route.navigate(['listpack']).then(() => {
          window.location.reload();
        });
      });
    }, err => {
      Swal.fire({
        title: 'Erreur, Veuillez réessayer !!',
        icon: 'warning',
        
      });
      setTimeout(() => {
        this.messageCommande = "";
      }, 3000);
    });
  }
    connexion() {
      this.route.navigate(['/listpack']);
    }
   
  }