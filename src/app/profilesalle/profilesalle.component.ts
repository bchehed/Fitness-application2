import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-profilesalle',
  templateUrl: './profilesalle.component.html',
  styleUrls: ['./profilesalle.component.css']
})
export class ProfilesalleComponent {
  salleDetails:any;
  id:number;
    constructor(private service:CrudService,private router:Router) {
      this.salleDetails = this.service.salleDetails();
     }
  
  
  
    ngOnInit(): void {
     
    }
}
