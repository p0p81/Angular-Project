import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean{
    return !!this.user;
  }

  constructor (private http: HttpClient) {
    this.loadUserFromLocalStorage()

    this.user$.subscribe((user) => {
      this.user = user;
    })

  }


  private loadUserFromLocalStorage(): void {
    const accessToken = localStorage.getItem('accessToken');
    const email = localStorage.getItem('email');
  
    const _id = localStorage.getItem('userId');

    if (accessToken && email && _id) {
  
      this.user$$.next({ email, _id, accessToken });
    
    }else{
      this.user$$.next(undefined);
    }
  }

  login(email: string, password: string) {
    return this.http.post<{ email: string,  _id: string, accessToken: string }>(`${environment.apiUrl}/users/login`, { email, password })
      .pipe(
        tap(res => {
          localStorage.setItem('accessToken', res.accessToken);

          localStorage.setItem('email', res.email);
        
          localStorage.setItem('userId', res._id);
          this.user$$.next({
            email: res.email,
          
            _id: res._id,
            accessToken: res.accessToken
          });
     

        })
      );

  }


  register(email: string, password: string) {
    const { apiUrl } = environment

    return this.http.post<{ email: string, _id: string, accessToken: string }>(`${apiUrl}/users/register`, {email, password })
      .pipe(
        tap(res => {
          localStorage.setItem('accessToken', res.accessToken);

          localStorage.setItem('email', res.email);
          // localStorage.setItem('username', res.username);
          localStorage.setItem('userId', res._id);
          this.user$$.next({
            email: res.email,
            _id: res._id,
            accessToken: res.accessToken,   
          });


        })
      );
  }


  // logout() {
  //   return this.http
  //   .post('/api/logout', {})
  //   .pipe(tap(user => this.user$$.next(undefined)))
  // }
  logout() {
    return this.http.post<User>(`${environment.apiUrl}/users/logout`, {})
      .pipe(
        tap(res => {
          localStorage.clear()
          this.user$$.next(undefined);
        })
      );
  }
}
