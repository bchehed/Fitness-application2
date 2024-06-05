import { CrudService } from './crud.service';


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalleAuthGuard implements CanActivate {

  constructor(private service: CrudService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isSalleIn = this.service.isSalleIn();

    if (isSalleIn) {
      return true;
    }else{
        this.router.navigate(['/loginsalle']).then(()=>{window.location.reload()});
      

      return false;
    }
    
  }

}