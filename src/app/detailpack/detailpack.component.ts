import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailpack',
  templateUrl: './detailpack.component.html',
  styleUrls: ['./detailpack.component.css']
})
export class DetailpackComponent {
  messageCommande=""
  id: number;
  event: any = {};
  
    constructor(private service:CrudService,private route:Router,private router: ActivatedRoute ) {
      
      
    }
  
    ngOnInit(): void {
      const idEvent = this.router.snapshot.params['id'];
  this.id = +idEvent;
  this.service.findPackById(this.id).subscribe((result) => {
    this.event = result;
    console.log(this.event);
  });
 
    }
    reserver(event: any) {
      this.messageCommande = 'Veuillez patienter ...';
    
      let datas = this.service.getClientInfo();
      let rq: any = {
        id_client: datas?.id,
        id_pack: event.id
      };
    
      this.service.reserverFromApi(rq).subscribe(
        (data: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Message envoyé avec succès',
            confirmButtonColor:"#6caaa8;"
          }).then(() => {
            this.route.navigate(['/listreservation']).then(() => {
              window.location.reload();
            });
          });
        },
        (err) => {
          Swal.fire({
            icon: 'warning',
            title: 'Attention',
            text: 'Service en panne!',
            confirmButtonColor:"#6caaa8;"
          });
        }
      );
    
      setTimeout(() => {
        this.messageCommande = '';
      }, 3000);
    }
    
    connexion() {
      this.route.navigate(['/listpack']);
    }
  }    