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

   flagPageSize10 = true
   flagPageSize20 = false
   flagPageSize50 = false

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
      this.response.getMonthExpenses();
    }
  }

  previousPage(): void {
    if (this.request.criteriaRequest.page?.number != null
      && this.request.criteriaRequest.page.number > 0) {
      this.request.criteriaRequest.page.number -= 1
      this.response.getMonthExpenses();
    }
  }

  pageSize10(): void {
    if (this.request.criteriaRequest.page != null) {
      this.request.criteriaRequest.page.size = 10
      this.request.criteriaRequest.page.number = 0
      this.response.getMonthExpenses()
      this.flagPageSize10 = true
      this.flagPageSize20 = false
      this.flagPageSize50 = false
    }
  }

  pageSize20(): void {
    if (this.request.criteriaRequest.page?.size != null) {
      this.request.criteriaRequest.page.size = 20
      this.request.criteriaRequest.page.number = 0
      this.response.getMonthExpenses()
      this.flagPageSize10 = false
      this.flagPageSize20 = true
      this.flagPageSize50 = false
    }
  }

  pageSize50(): void {
    if (this.request.criteriaRequest.page?.size != null) {
      this.request.criteriaRequest.page.size = 50
      this.request.criteriaRequest.page.number = 0
      this.response.getMonthExpenses();
      this.flagPageSize10 = false
      this.flagPageSize20 = false
      this.flagPageSize50 = true
    }
  }

}
