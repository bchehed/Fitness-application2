import { Component } from '@angular/core';
import { CrudService } from '../Services/crud.service';
import { Router } from '@angular/router';
import { ReservationCoach } from '../Entity/reservationcoach.Entity';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent {
  listReservationCoach : ReservationCoach[]
  totalReservationCoachs:number=0;
  constructor(private service:CrudService,private router:Router) { }
  ngOnInit(): void {
    
    
      this.service.getAllReservationCoachbyClientId().subscribe((data:any)=>{
        console.log(data)
        this.listReservationCoach=data;
      })
  }


}
