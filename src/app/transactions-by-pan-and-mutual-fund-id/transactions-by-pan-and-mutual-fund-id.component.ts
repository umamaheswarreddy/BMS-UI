import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../service/investment.service';
import { Investment } from '../model/investment';

@Component({
  selector: 'app-transactions-by-pan-and-mutual-fund-id',
  templateUrl: './transactions-by-pan-and-mutual-fund-id.component.html',
  styleUrls: ['./transactions-by-pan-and-mutual-fund-id.component.css']
})
export class TransactionsByPanAndMutualFundIdComponent implements OnInit {

  transactions:Investment[];
  errMsg:string;
  list:any;
  pan:string;
  mutualFundId:number;
  invalidLogin = false;
  

  constructor(private Service:InvestmentService) { }

  ngOnInit() {
    
  }


public findUserByPanAndMID(){
  this.transactions=null;
  this.errMsg=null;
  // this.Service.getByEmail(this.emailId).
  // subscribe(
  //   (data) => {this.employees = data; },
  //   (err)=>{this.errMsg='Sorry server not reachable';}
  // );

  this.Service.getTransactionsByPanAndMutualFundId(this.pan,this.mutualFundId)
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
