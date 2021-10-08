import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResponseExpenses} from "../model/response-expenses";
import {Observable} from "rxjs";
import {ExpenseCriteriaRequest} from "../model/expense-criteria-request";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private url = 'http://localhost:8080/home-budget/expenses';

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observable: ResponseExpenses
  };

  public getMonthExpenses(criteriaRequest: ExpenseCriteriaRequest): Observable<ResponseExpenses> {
    return this.httpClient.post<ResponseExpenses>(this.url, criteriaRequest, this.httpOptions);
  }

}
