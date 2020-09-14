import { Component, OnInit } from '@angular/core';
import { MutualFund } from '../model/mutual-fund';
import { MutualFundService } from '../service/mutual-fund.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mutual-fund',
  templateUrl: './mutual-fund.component.html',
  styleUrls: ['./mutual-fund.component.css']
})
export class MutualFundComponent implements OnInit {

  mutualFunds:MutualFund[];
  errMsg:string;
  list:any;
  constructor(private prodServ:MutualFundService,
    private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.mutualFunds=null;
    this.errMsg=null;
    this.prodServ.getAll().subscribe(
      (data) => {this.mutualFunds = data; },
      (err)=>{this.errMsg='Sorry server not reachable';}
    );
  }

}
