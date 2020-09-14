import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SerchByPanComponent } from './serch-by-pan/serch-by-pan.component';
import {BasicAuthHtppInterceptorService} from './service/basic-auth-htpp-interceptor.service'
import { BankAccountSetupComponent } from './bank-account-setup/bank-account-setup.component';
import { from } from 'rxjs';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { TransactionsByPanComponent } from './transactions-by-pan/transactions-by-pan.component';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuardService } from './service/auth-guard.service';
import { MutualFundService } from './service/mutual-fund.service';
import { InvestmentService } from './service/investment.service';
import { CookieService } from 'ngx-cookie-service';
import { TransactionsByPanAndMutualFundIdComponent } from './transactions-by-pan-and-mutual-fund-id/transactions-by-pan-and-mutual-fund-id.component';
import { TransactionsBymutualFundIdComponent } from './transactions-bymutual-fund-id/transactions-bymutual-fund-id.component';
import { InvestFundComponent } from './invest-fund/invest-fund.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    SerchByPanComponent,
    BankAccountSetupComponent,
    MutualFundComponent,
    TransactionsByPanComponent,
    TransactionsByPanAndMutualFundIdComponent,
    TransactionsBymutualFundIdComponent,
    InvestFundComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService,AuthGuardService,MutualFundService,BasicAuthHtppInterceptorService,InvestmentService,CookieService,
    {provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
