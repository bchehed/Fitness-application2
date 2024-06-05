import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService } from '../Services/crud.service';
import { Pack } from '../Entity/pack.Entity';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listPack : Pack[]
  totalPacks:number=0;
  
  totalClient:number=0;
  totalCoach:number=0;
  totalSallesdesport:number=0;
  constructor(private service:CrudService,private router:Router,private elementRef: ElementRef,private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.service.getPack().subscribe(pack => {
      this.listPack = pack;
    })
    this.service.getPack().subscribe(pack =>{
      this.totalPacks=pack.length})
   
      this.service.getClient().subscribe(client =>{
        this.totalClient=client.length})
  
  
      this.service.getCoach().subscribe(coach =>{
          this.totalCoach=coach.length})

         
          this.service.getSalledesport().subscribe(Salledesport =>{
            this.totalSallesdesport=Salledesport.length})  
  }
 

}