import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResponseExpenses} from "../model/response-expenses";
import {Observable} from "rxjs";
import {ExpenseCriteriaRequest} from "../model/expense-criteria-request";
import {ExpenseRequest} from "../model/expense-request";
import {Expense} from "../model/expense";

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

  public editExpense(expenseRequest: ExpenseRequest): Observable<Expense> {
    return this.httpClient.put<Expense>(this.url, expenseRequest, this.httpOptions);
  }

  public deleteExpense(id: string): Observable<string> {
    return this.httpClient.delete<string>(this.url + '/' + id);
  }

}
