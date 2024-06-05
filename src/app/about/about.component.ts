import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { Coach } from '../Entity/coach.Entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pack } from '../Entity/pack.Entity';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  listPack : Pack[]
  totalPacks:number=0;
  listCoach:Coach[]
  
  totalClient:number=0;
  totalCoach:number=0;
  totalSallesdesport:number=0;
  constructor(private service:CrudService,private router:Router) { }
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