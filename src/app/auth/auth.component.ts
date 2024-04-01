import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root' // Указва, че този сервиз е достъпен в коренния инжектор
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
    
      return true;
    } else {
      
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
