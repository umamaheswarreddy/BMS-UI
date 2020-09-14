import { Component, OnInit } from '@angular/core';
import { Investment } from '../model/investment';
import { InvestmentService } from '../service/investment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-transactions-by-pan',
  templateUrl: './transactions-by-pan.component.html',
  styleUrls: ['./transactions-by-pan.component.css']
})
export class TransactionsByPanComponent implements OnInit {
  transactions:Investment[];
  errMsg:string;
  list:any;
  pan:string;
  errorMessage = "Authentication Failed";
  invalidLogin = false;
  

  constructor(private Service:UserService) { }

  ngOnInit() {
    
  }


public findUserByPan(){
  this.transactions=null;
  this.errMsg=null;
  // this.Service.getByEmail(this.emailId).
  // subscribe(
  //   (data) => {this.employees = data; },
  //   (err)=>{this.errMsg='Sorry server not reachable';}
  // );

  this.Service.getTransactionsByPan(this.pan)
  .subscribe(
    (data)=>{this.transactions=data;
             this.invalidLogin = false},
    (error)=>{
       console.log(error);
       this.errMsg=error.error.message;
       this.invalidLogin = true;}
    );
 }
}
