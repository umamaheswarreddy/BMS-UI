import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {AuthenticationService} from '../service/authentication.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username: string;
  password: string;
  errorMessage = "Authentication Failed";
  invalidLogin = false;
  message: any

  constructor(private service: UserService,private router:Router,
    private auth:AuthenticationService,private cookieService: CookieService) { }

  ngOnInit() {
  }

  doLogin() {
    let resp = this.auth.authenticate(this.username, this.password);
    resp.subscribe(
      data => {
          this.message = data;
          this.invalidLogin=false
          this.router.navigate(["/home"])
          },
      error=>{
        console.log(error);
        this.invalidLogin = true;
      }
       );
  }
}