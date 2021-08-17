import { Component, OnInit } from '@angular/core';
import {ExpenseService} from "../service/expense.service";
import {ExpenseCriteriaRequestService} from "../service/expense-criteria-request.service";
import {ResponseExpenses} from "../model/response-expenses";

@Component({
  selector: 'app-expense-page',
  templateUrl: './expense-page-response.component.html',
  styleUrls: ['../expense.css'],
})
export class ExpensePageResponseComponent implements OnInit {

  private expenseService: ExpenseService;
  private criteriaRequest: ExpenseCriteriaRequestService;


  private _responseExpenses: ResponseExpenses = {};

  constructor(expenseService: ExpenseService, criteriaRequest: ExpenseCriteriaRequestService) {
    this.expenseService = expenseService;
    this.criteriaRequest = criteriaRequest;
  }

  get responseExpenses(): ResponseExpenses {
    return this._responseExpenses;
  }

  ngOnInit(): void {
    this.getMonthExpenses()
  }

  getMonthExpenses(): void {
    this.expenseService.getMonthExpenses(this.criteriaRequest.criteriaRequest)
      .subscribe(response => this._responseExpenses = response);
  }


}
