import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  cookieValue: string;
 

  constructor(
    private httpClient: HttpClient,private cookieService: CookieService
  ) {
  }

  authenticate(username, password) {
    console.log(username);
    console.log(password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.httpClient.get("http://localhost:8080/user/",{headers,responseType: 'text' as 'json'}).pipe(
      map(
        userData => {
         
          sessionStorage.setItem('username', username);
          // sessionStorage.setItem('password', password);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          // console.log("jsession id: "+this.cookieService.get('JSESSIONID'));
          return userData;
        }
      )

    );
  }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('basicauth')
  }
}