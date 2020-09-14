import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:AuthenticationService) { }
  ngOnInit(): void {
    this.service.logOut();
  }

}
