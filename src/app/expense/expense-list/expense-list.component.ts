import {Component, OnInit} from '@angular/core';
import {ResponseExpenses} from "../model/response-expenses";
import {ExpensePageResponseComponent} from "../expense-page-response/expense-page-response.component";

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['../expense.css'],
  providers: []
})
export class ExpenseListComponent implements OnInit {

  constructor(private response: ExpensePageResponseComponent) {
  }

  ngOnInit(): void {
  }

  get responseExpenses(): ResponseExpenses {
    return this.response.responseExpenses;
  }

}
