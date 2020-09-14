import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../model/bank-account';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bank-account-setup',
  templateUrl: './bank-account-setup.component.html',
  styleUrls: ['./bank-account-setup.component.css']
})
export class BankAccountSetupComponent implements OnInit {

  item:BankAccount;
  errMsg:string;
  isNew:boolean;
  success = false;
  
  
  constructor(
    private Service:UserService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }
    
  ngOnInit() {
    let bid=this.actRoute.snapshot.params.bid;
    if(bid){
      this.isNew=false;
      this.Service.getByBank(bid).subscribe(
        (data) =>{
          this.item=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.item={
        "bid":0,
        "bankAccount":'',
        "ifscCode":'',
        "bankName":'',
        "micrCode":'',
        "pan":''
        
        
        }
      };
    }
  
  save(){
    let ob:Observable<BankAccount>;
    if(this.isNew){
      
      ob=this.Service.addBankAccount(this.item);
    }
    ob.subscribe(
      (Data) =>{
        this.success = false
        this.router.navigateByUrl("home");
      },
      (error)=> {
        
        this.errMsg=error.error.message;
        this.success = true
        
      }
    );
  }
}

