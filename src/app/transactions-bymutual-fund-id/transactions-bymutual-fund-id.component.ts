import { Component, OnInit } from '@angular/core';
import { Investment } from '../model/investment';
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-transactions-bymutual-fund-id',
  templateUrl: './transactions-bymutual-fund-id.component.html',
  styleUrls: ['./transactions-bymutual-fund-id.component.css']
})
export class TransactionsBymutualFundIdComponent implements OnInit {

  transactions: Investment[];
  errMsg: string;
  list: any;
  mutualFundId: number;
  invalidLogin=false;
  
  constructor(private Service: InvestmentService) { }

  ngOnInit() {

  }

  public findTransactionsByMutualFundIdID() {
    this.transactions=null;
  this.errMsg=null;
  // this.Service.getByEmail(this.emailId).
  // subscribe(
  //   (data) => {this.employees = data; },
  //   (err)=>{this.errMsg='Sorry server not reachable';}
  // );

  this.Service.findAllTransactionDetailsForParticularFund(this.mutualFundId)
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
