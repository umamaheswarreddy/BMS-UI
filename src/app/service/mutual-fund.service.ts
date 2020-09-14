import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MutualFund } from '../model/mutual-fund';


@Injectable({
  providedIn: 'root'
})
export class MutualFundService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:9000/mutualFunds";
  }

  getAll(): Observable<MutualFund[]> {
    return this.httpClient.get<MutualFund[]>(this.baseUrl+'/all');
  }



}
