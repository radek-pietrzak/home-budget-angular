import {Component, OnInit} from '@angular/core';
import {ResponseExpenses} from "../model/response-expenses";
import {ExpenseService} from "../service/expense.service";
import {ExpenseCriteriaRequest} from "../model/expense-criteria-request";
import {ExpenseCriteriaRequestService} from "../service/expense-criteria-request.service";
import {Expense} from "../model/expense";

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
  providers: [ExpenseService,
    ExpenseCriteriaRequest]
})
export class ExpenseListComponent implements OnInit {

  private _responseExpenses: ResponseExpenses = {
  };


  constructor(
    private expenseService: ExpenseService,
    private criteriaRequest: ExpenseCriteriaRequestService) {

  }

  ngOnInit(): void {
    this.getMonthExpenses();
  }

  get responseExpenses(): ResponseExpenses {
    return this._responseExpenses;
  }

  getMonthExpenses(): void {
    this.expenseService.getMonthExpenses(this.criteriaRequest.criteriaRequest)
      .subscribe(response => this._responseExpenses = response);
  }
}
