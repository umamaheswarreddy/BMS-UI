import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SerchByPanComponent } from './serch-by-pan/serch-by-pan.component';
import { AuthGuardService } from './service/auth-guard.service';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { TransactionsBymutualFundIdComponent } from './transactions-bymutual-fund-id/transactions-bymutual-fund-id.component';
import { BankAccountSetupComponent } from './bank-account-setup/bank-account-setup.component';
import { TransactionsByPanComponent } from './transactions-by-pan/transactions-by-pan.component';
import { TransactionsByPanAndMutualFundIdComponent } from './transactions-by-pan-and-mutual-fund-id/transactions-by-pan-and-mutual-fund-id.component';
import { InvestFundComponent } from './invest-fund/invest-fund.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"add",component:RegisterComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGuardService]},
  {path:"login",component:LoginComponent},
  {path:"home1",component:Home1Component,canActivate:[AuthGuardService]},
  {path:"home2",component:Home2Component,canActivate:[AuthGuardService]},
  {path:"addInvestment",component:InvestFundComponent,canActivate:[AuthGuardService]},
  {path:"mutualFund",component:MutualFundComponent,canActivate:[AuthGuardService]},
  {path:"Mid",component:TransactionsBymutualFundIdComponent,canActivate:[AuthGuardService]},
  {path:"TransByPan",component:TransactionsByPanComponent,canActivate:[AuthGuardService]},
  {path:"PanMid",component: TransactionsByPanAndMutualFundIdComponent,canActivate:[AuthGuardService]},
  {path:"searchByPan",component:SerchByPanComponent,canActivate:[AuthGuardService]},
  {path:"addBank",component:BankAccountSetupComponent,canActivate:[AuthGuardService]},
  {path:"home/logout",component:LogoutComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
