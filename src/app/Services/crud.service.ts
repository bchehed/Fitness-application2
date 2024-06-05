import { Injectable } from '@angular/core';
import { Client } from '../Entity/client.Entity';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Coach } from '../Entity/coach.Entity';
import { Contact } from '../Entity/contact.Entity';
import { Observable } from 'rxjs';
import { Pack } from '../Entity/pack.Entity';
import { Reservation } from '../Entity/reservation.Entity';
import { ReservationCoach } from '../Entity/reservationcoach.Entity';
import { Salle,  } from '../Entity/Salle.Entity';
import { Planing } from '../Entity/planing.Entity';
import { saveplaning } from '../Entity/saveplaning.Entity';
import { Savepack } from '../Entity/savepack.Entity';
import { Categorie } from '../Entity/categorie.Entity';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiUrl="http://localhost:8081/api"
  loginClientUrl="http://localhost:8081/api/client/login"
  loginCoachUrl="http://localhost:8081/api/coach/login"
  loginSalleUrl="http://localhost:8081/api/salle/login"
  

  helper=new JwtHelperService()
  constructor(private http:HttpClient) { }

  loginClient(client:Client){
    return this.http.post<any>(this.loginClientUrl, client);
  }
  loginSalledesport(salle:Salle){
    return this.http.post<any>(this.loginSalleUrl, salle);
  }
  loginCoach(coach:Coach){
    return this.http.post<any>(this.loginCoachUrl, coach);
  }


  getCoachInfo() {
    var token = localStorage.getItem("myTokenCoach");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    var decoded: any
    return decodedToken?.data
  }
  getClientInfo() {
    var token = localStorage.getItem("myTokenClient");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    var decoded: any
    return decodedToken?.data
  }
  getSalleInfo() {
    var token = localStorage.getItem("myTokenSalle");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    var decoded: any
    return decodedToken?.data
  }


  isClientIn(){

    let token = localStorage.getItem("myTokenClient");
  
    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  isCoachIn(){
  
    let token = localStorage.getItem("myTokenCoach");
  
    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  isSalleIn(){
  
    let token = localStorage.getItem("myTokenSalle");
  
    if (token) {
      return true ;
    } else {
      return false;
    }
  }


  clientDetails(){
    let token:any=localStorage.getItem('myTokenClient');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }
   coachDetails(){
    let token:any=localStorage.getItem('myTokenCoach');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }
   salleDetails(){
    let token:any=localStorage.getItem('myTokenSalle');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }


   addNewClient(client:Client)
   {
    return this.http.post<any>(this.apiUrl+"/client",client);
   }
   addNewCoach(coach:Coach)
   {
    return this.http.post<any>(this.apiUrl+"/coach",coach);
   }
   addNewSalle(salle:Salle)
  {
   return this.http.post<any>(this.apiUrl+"/salle",salle);
  }
  addNewplaning(planing:Planing)
  {
   return this.http.post<any>(this.apiUrl+"/planing",planing);
  }
  


  addPlaning(saveplaning: saveplaning ){
    return this.http.post<any>(this.apiUrl+"/planing", saveplaning);
  }
  addContact(contact:Contact)
  {
   return this.http.post<any>(this.apiUrl+"/contact",contact);
  }
  addpack(savepack: Savepack ){
    return this.http.post<any>(this.apiUrl+"/pack", savepack);
  }
 
 
  getCoach(): Observable<Coach[]>{
    return this.http.get<Coach[]>(this.apiUrl + "/coach");
   }
  getPack(): Observable<Pack[]>{
    return this.http.get<Pack[]>(this.apiUrl + "/pack");

   }
   updatePack(id: number, pack: Pack): Observable<Pack> {
    return this.http.put<Pack>(`${this.apiUrl}/${id}`, pack);
  }
   getSalledesport(): Observable<Salle[]>{
    return this.http.get<Salle[]>(this.apiUrl + "/salle");
   } 
  getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl + "/client");
   }
   getPlaning(): Observable<Planing[]>{
    return this.http.get<Planing[]>(this.apiUrl + "/planing");
   }
   getCategorie(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.apiUrl +"/categorie");
   }


   findPackById(id : number): Observable<Pack> {
    const url =`${this.apiUrl + "/pack"}/${id} ; `
    return this.http.get<Pack>(url)
  }
  findClientById(id : number): Observable<Client> {
    const url = `${this.apiUrl + "/client"}/${id}`
    return this.http.get<Client>(url)
  }
  findCoachById(id : number): Observable<Coach> {
    const url =`${this.apiUrl + "/coach"}/${id} ; `
    return this.http.get<Coach>(url)
  }
  findSalleById(id : number): Observable<Salle> {
    const url =`${this.apiUrl + "/salle"}/${id} ; `
    return this.http.get<Salle>(url)
  }
  findPlaningById(id : number): Observable<Planing> {
    const url =`${this.apiUrl + "/coach"}/${id} ; `
    return this.http.get<Planing>(url)
  }
  
 
  reserverFromApi(rq:any){
    return this.http.post<any>( "http://localhost:8081/api/reservation" ,rq );
 }

 

 updateClient(id:number,client: Client) {
  const url = `${this.apiUrl+"/client"}/${id}`
  return this.http.put<any>(url, client);
}
updateCoach(id:number,coach: Coach) {
  const url = `${this.apiUrl+"/coach"}/${id}`
  return this.http.put<any>(url, coach);
}
updateSalle(id:number,salle: Salle) {
  const url = `${this.apiUrl+"/salle"}/${id}`
  return this.http.put<any>(url, salle);
}



getReservation(): Observable<Reservation[]>{
  return this.http.get<Reservation[]>(this.apiUrl + "/reservation");
 }
 getReservationCoach(): Observable<ReservationCoach[]>{
  return this.http.get<ReservationCoach[]>(this.apiUrl + "/reservationcoach");
 }


 
 

reserverCoachFromApi(rq:any){
  return this.http.post<any>( "http://localhost:8081/api/reservationcoach" ,rq );
}

getAllPackbySalleId(){
  let dates=this.getSalleInfo()
  return this.http.get<any>( "http://localhost:8081/api/pack/get-all-by-id-salle/"+ dates.id , );
}


 



getAllPlanningbyCoachId(){
  let dates=this.getCoachInfo()
  return this.http.get<any>( "http://localhost:8081/api/planing/get-all-by-id-coach/"+ dates.id , );
}

onDeletePlaning(id : number){
  const url =`${this.apiUrl+"/planing"}/${id}` 
  return this.http.delete(url , )
}
onDeletePack(id : number){
  const url =`${this.apiUrl+"/pack"}/${id}` 
  return this.http.delete(url , )
}

getAllReservationbyClientId(){
  let dates=this.getClientInfo()
  return this.http.get<any>( "http://localhost:8081/api/reservation/get-all-by-id-client/"+ dates.id , );
}
getAllReservationCoachbyClientId(){
  let dates=this.getClientInfo()
  return this.http.get<any>( "http://localhost:8081/api/reservationcoach/get-all-by-id-client/"+ dates.id , );
}
}
