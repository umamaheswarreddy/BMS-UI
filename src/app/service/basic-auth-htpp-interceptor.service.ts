import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor(private auth:AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let myHeader = new Headers();

    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
      req = req.clone({

            setHeaders: {
              Authorization: sessionStorage.getItem('basicauth')  
            },
           
      })
    }

    return next.handle(req)
    .pipe(catchError(this.handleError));;

  }
  handleError(error){
    return throwError(error);
  }
}