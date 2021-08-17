import {Component, OnInit} from '@angular/core';
import {ExpenseCriteriaRequestService} from "../service/expense-criteria-request.service";
import {ExpensePageResponseComponent} from "../expense-page-response/expense-page-response.component";

@Component({
  selector: 'app-expense-page-criteria',
  templateUrl: './expense-page-criteria.component.html',
  styleUrls: ['../expense.css'],
  providers: [ExpenseCriteriaRequestService]
})
export class ExpensePageCriteriaComponent implements OnInit {

  constructor(private request: ExpenseCriteriaRequestService,
              private response: ExpensePageResponseComponent) {
  }

  ngOnInit(): void {
  }

  getTotalPages(): number {
    return <number>this.response.responseExpenses.totalPages;
  }

  getPageNumber(): number {
    return <number>this.request.page.number + 1;
  }

}
