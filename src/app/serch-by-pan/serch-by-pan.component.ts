import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../model/bank-account';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-serch-by-pan',
  templateUrl: './serch-by-pan.component.html',
  styleUrls: ['./serch-by-pan.component.css']
})
export class SerchByPanComponent implements OnInit {

  bankaccounts: BankAccount[];
  errMsg: string;
  list: any;
  pan: string;
  errorMessage = "you are not Authenticated to see others bankAccounts";
  invalidLogin = false;


  constructor(private Service: UserService) { }

  ngOnInit() {

  }


  public findUserByPan() {
    this.bankaccounts = null;
    this.errMsg = null;
    this.Service.getByPan(this.pan).
      subscribe(
        (data) => {
          this.bankaccounts = data,
            this.invalidLogin = false

        },
        (error)=>{
          console.log(error);
          this.errMsg=error.error.message;
          this.invalidLogin = true;
        }
      );

    // let resp= this.Service.getByPan(this.pan);
    // resp.subscribe((data)=>this.bankaccounts=data);
  }
}
