import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResponseTransactions} from "../model/response-transactions";
import {Observable} from "rxjs";
import {TransactionCriteriaRequest} from "../model/transaction-criteria-request";
import {TransactionRequest} from "../model/transaction-request";
import {Transaction} from "../model/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private url = 'http://localhost:8080/home-budget/transactions';

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observable: ResponseTransactions
  };

  public getMonthTransactions(criteriaRequest: TransactionCriteriaRequest): Observable<ResponseTransactions> {
    return this.httpClient.post<ResponseTransactions>(this.url, criteriaRequest, this.httpOptions);
  }

  public editTransaction(transactionRequest: TransactionRequest): Observable<Transaction> {
    return this.httpClient.put<Transaction>(this.url, transactionRequest, this.httpOptions);
  }

  public deleteTransaction(id: string): Observable<string> {
    return this.httpClient.delete<string>(this.url + '/' + id);
  }

  getTransaction(id: string): Observable<Transaction> {
    return this.httpClient.get<Transaction>(this.url + '/' + id);
  }

}
