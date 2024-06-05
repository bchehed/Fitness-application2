import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Planing } from '../Entity/planing.Entity';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-list-planingclient',
  templateUrl: './list-planingclient.component.html',
  styleUrls: ['./list-planingclient.component.css']
})
export class ListPlaningclientComponent {
  listPlaning:Planing[]
  totalPlanings:number=0;

  constructor(private service:CrudService,private route:Router,private router: ActivatedRoute ) {
      
      
  }
  ngOnInit(): void {
   

        this.service.getPlaning().subscribe(planing => {
          this.listPlaning = planing;
        })
        this.service.getPlaning().subscribe(planing =>{
          this.totalPlanings=planing.length})
  

      }
}
