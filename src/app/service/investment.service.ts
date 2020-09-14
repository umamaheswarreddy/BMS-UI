import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investment } from '../model/investment';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  baseUrl: string;
  cookieValue: string;
  request: HttpRequest<any>;
  next: HttpHandler;
 

  constructor(private httpClient: HttpClient,private cookieService: CookieService,public auth: AuthenticationService) {
    this.baseUrl = "http://localhost:8080/user";
    // this.cookieValue = this.cookieService.get('JSESSIONID');
    // console.log(this.cookieValue)
  }

  getTransactionsByPan(pan:string) :Observable<Investment[]>{
    // const clonedRequest = req.clone({ headers: req.headers.set('Set-Cookie', 'jsessionid=' + this.auth.getJSessionId()) });
    // this.cookieValue = this.cookieService.get('JSESSIONID');
   
    return this.httpClient.get<Investment[]>(`${this.baseUrl+"/getTransactions"}/${pan}`);
   
   }
   getTransactionsByPanAndMutualFundId(pan:string,mutualFundId:number) :Observable<Investment[]>{
    return this.httpClient.get<Investment[]>(this.baseUrl+"/getTransaction/pan/"+pan+"/mutualFundid/"+mutualFundId);
   
   }
   findAllTransactionDetailsForParticularFund(mutualFundId:number) :Observable<Investment[]>{
    return this.httpClient.get<Investment[]>(this.baseUrl+"/getAllTransaction/MutualFundId/"+mutualFundId);
   
   }
   addInvestment(investment: Investment): Observable<Investment> {
    return this.httpClient.post<Investment>(this.baseUrl + "/invest", investment);
  }
}
