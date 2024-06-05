import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../Entity/client.Entity';
import { Reservation } from '../Entity/reservation.Entity';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profilclient',
  templateUrl: './profilclient.component.html',
  styleUrls: ['./profilclient.component.css']
})
export class ProfilclientComponent implements OnInit {
  clientDetails:any;
id:number;
  constructor(private service:CrudService,private router:Router) {
    this.clientDetails = this.service.clientDetails();
   }



  ngOnInit(): void {
   
  }
}