import { Component, Injectable } from '@angular/core';
import { Reservation } from '../Entity/reservation.Entity';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';

@Component({
  selector: 'app-listreservation',
  templateUrl: './listreservation.component.html',
  styleUrls: ['./listreservation.component.css']
})

export class ListreservationComponent {
  paymentHandler: any = null;
  listReservation : Reservation[]
  totalReservations:number=0;
  clientId:any
  listReservationCoach:any=[]
  constructor(private service:CrudService,private router:Router) { }
  ngOnInit(): void {
  
 
    this.service.getAllReservationbyClientId().subscribe((data:any)=>{
      console.log(data)
      this.listReservation=data;
    })
    this.service.getAllReservationCoachbyClientId().subscribe((data:any)=>{
      console.log(data)
      this.listReservationCoach=data;
    })
      this.invokeStripe();
  }

  
  makePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51PEVjZ09jPHWInDxejy7LAofWeZhs0yEfGlJbbDS15KnQ8sN90epWu1EUK093S1rIcMTkT6myYSpiekaXBmGsJnW00vTdbq92s',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: '',
      description: '',
   
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Oji5gJWrsLJ8D1xQhzDTIUrYq3rsuU8KMuRYbFelv9NwU46WrvmcOQ16jzLfh08PMwdzsLcq8n9RuVasHPQUlRB00LmTRx2aE',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment effectuée avec success!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
    
  }
  
   
  }




 


