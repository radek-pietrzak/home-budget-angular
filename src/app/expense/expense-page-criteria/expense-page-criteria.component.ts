import {Component, OnInit} from '@angular/core';
import {ExpenseCriteriaRequestService} from "../service/expense-criteria-request.service";
import {ExpensePageResponseComponent} from "../expense-page-response/expense-page-response.component";

@Component({
  selector: 'app-expense-page-criteria',
  templateUrl: './expense-page-criteria.component.html',
  styleUrls: ['../expense.css'],
  providers: []
})
export class ExpensePageCriteriaComponent implements OnInit {
  private request: ExpenseCriteriaRequestService
  private response: ExpensePageResponseComponent


  constructor(request: ExpenseCriteriaRequestService,
              response: ExpensePageResponseComponent) {
    this.request = request;
    this.response = response;
  }

  ngOnInit(): void {
  }

  getTotalPages(): number {
    return <number>this.response.responseExpenses.totalPages;
  }

  getPageNumber(): number {
    return <number>this.request.page.number + 1;
  }

  nextPage(): void {
    if (this.request.criteriaRequest.page?.number != null
      && this.response.responseExpenses.hasNextPage) {
      this.request.criteriaRequest.page.number += 1
    }
    this.response.getMonthExpenses();
  }

  previousPage(): void {
    if (this.request.criteriaRequest.page?.number != null
      && this.request.criteriaRequest.page.number > 0) {
      this.request.criteriaRequest.page.number -= 1
    }
    this.response.getMonthExpenses();
  }

}
