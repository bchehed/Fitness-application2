import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { Pack } from '../Entity/pack.Entity';
import { Coach } from '../Entity/coach.Entity';
import { Planing } from '../Entity/planing.Entity';


@Component({
  selector: 'app-list-pack',
  templateUrl: './list-pack.component.html',
  styleUrls: ['./list-pack.component.css']
})
export class ListPackComponent {
 
  
  listPack : Pack[]
  totalPacks:number=0;

 

 
  constructor(private service:CrudService,private route:Router,private router: ActivatedRoute ) {
      
      
  }
  ngOnInit(): void {
    this.service.getPack().subscribe(pack => {
      this.listPack = pack;
    })
    this.service.getPack().subscribe(pack =>{
      this.totalPacks=pack.length})

      

       

      }
    }