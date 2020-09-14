import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { BankAccount } from '../model/bank-account';
import { Observable } from 'rxjs';
import { Investment } from '../model/investment';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import "rxjs/add/operators/catch";
// import "rxjs/add/observable/throw";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;
  baseUrl1: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8080/UserRegistration";
    this.baseUrl1 = "http://localhost:8080/user";
  }

  addEmp(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + "/add", user);
  }
  addBankAccount(bank: BankAccount): Observable<BankAccount> {
    return this.httpClient.post<BankAccount>(this.baseUrl1 + "/addBank", bank);
  }
  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }
  getByBank(bid: number): Observable<BankAccount> {
    return this.httpClient.get<BankAccount>(this.baseUrl1+"/bankAccount/"+bid);
  }
 
  getByPan(pan:string) :Observable<BankAccount[]>{
    // let username=sessionStorage.getItem('username')
    // let password=sessionStorage.getItem('password')
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
     return this.httpClient.get<BankAccount[]>(this.baseUrl1+"/bank/"+pan);
    //  .pipe(catchError(this.handleError));
   }

  //  handleError(error){
  //    return throwError(error);
  //  }

   logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('password')
  }
  

  getTransactionsByPan(pan:string) :Observable<Investment[]>{
    return this.httpClient.get<Investment[]>(`${this.baseUrl1+"/getTransactions"}/${pan}`);
   
   }
}







 // login(username: string, password: string) {
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   sessionStorage.setItem('username', username)
  //   sessionStorage.setItem('password', password)
  //   return this.httpClient.get("http://localhost:8080/user/", { headers, responseType: 'text' as 'json' })
  // }