import {
    HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable, Provider } from '@angular/core';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { SpinnerService } from './spinner/spinner.service';
import { Router } from '@angular/router';
import { ErrorService } from './core/error/error.service';


@Injectable() 
export class AppInterceptor implements HttpInterceptor {
  constructor(
     private router: Router, 
     private errorService: ErrorService,
      private spinnerService:SpinnerService
     ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken');

    if (req.url.startsWith('http://localhost:3030') && accessToken) {
      req = req.clone({
        setHeaders: {
          "X-Authorization": accessToken
        }
      });
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
        }
      });
    }

    this.spinnerService.requestStarted();
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorService.setError(error);
          switch (error.status) {
            case 401:
            case 404:
       
              this.router.navigate(['/error']);
              break;
            case 403:
              // this.router.navigate(['/home']);
         
              this.router.navigate(['/error']);
              break;
            default:
           
              this.router.navigate(['/error']);
              break;
          }
          return throwError(() => error);
        }),
        finalize(() => {
        
          this.spinnerService.requestEnded();
          this.spinnerService.resetSpinner();
        })
      )
  }
}
export const appInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS,
  
}

