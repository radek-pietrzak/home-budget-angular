import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ExpenseCategoryCriteriaRequest} from "../model/expense-category-criteria-request";
import {Observable} from "rxjs";
import {ExpenseCategoryResponse} from "../model/expense-category-response";

@Injectable({
  providedIn: 'root'
})
export class ExpenseCategoryService {
  private url = 'http://localhost:8080/home-budget/expense-categories';

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observable: ExpenseCategoryResponse
  };

  public getCategories(criteriaRequest: ExpenseCategoryCriteriaRequest): Observable<ExpenseCategoryResponse> {
    return this.httpClient.post<ExpenseCategoryResponse>(this.url, criteriaRequest, this.httpOptions)
  }
}
