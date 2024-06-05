import { Component } from '@angular/core';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-profilcoach',
  templateUrl: './profilcoach.component.html',
  styleUrls: ['./profilcoach.component.css']
})
export class ProfilcoachComponent {
  coachDetails: any;
  id:number;
  constructor(  private service: CrudService, ) {
    this.coachDetails = this.service.coachDetails(); 
}

ngOnInit(): void {
  this.service.coachDetails().subscribe((coachDetails: any) => {
    this.coachDetails = coachDetails;
    this.id = coachDetails.id;
  });
  
}
}