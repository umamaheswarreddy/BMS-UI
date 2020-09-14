import { Component, OnInit } from '@angular/core';
import { Investment } from '../model/investment';
import { InvestmentService } from '../service/investment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-invest-fund',
  templateUrl: './invest-fund.component.html',
  styleUrls: ['./invest-fund.component.css']
})
export class InvestFundComponent implements OnInit {

  item: Investment;
  errMsg: string;
  midError="mutual fund id shoud should be between 1 and 3"
  isNew: boolean;
  success = false;
  check=false;
  constructor(
    private userService: InvestmentService,
    private actRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.params.id;
    if (id) {
      this.isNew = false;
      // this.userService.getById(id).subscribe(
      //   (data) => {
      //     this.item = data;
      //   }
      // );
     

    }
    else {
      this.isNew = true;
      this.item = {
        "iId": 0,
        "mutualFundId": 0,
        "accountNumber": '',
        "amountToInvest": '',
        "timestamp": new Date(),
        "timeStamp": new Date(),
        "pan": '',
        "mutulFund": {
          "mId": 0,
          "mutualFundName": ''
        }
      }
    };
  }

  save() {
    let ob: Observable<Investment>;
    if (this.isNew) {
      ob = this.userService.addInvestment(this.item);
    }
    ob.subscribe(
      (Data) => {
        this.success=false;
        this.router.navigateByUrl("home");
      },
      (error) => {
        console.log(error)
        this.errMsg = error.error.message;
        if(!( this.item.mutualFundId>0 && this.item.mutualFundId<4))
        {
              this.check=true;
        }
        this.success=true;

      }
    );
  }

}
