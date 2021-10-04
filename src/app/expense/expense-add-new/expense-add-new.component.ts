import {Component, OnInit} from '@angular/core';
import {ExpensePageResponseComponent} from "../expense-page-response/expense-page-response.component";

@Component({
  selector: '[app-expense-add-new]',
  templateUrl: './expense-add-new.component.html',
  styleUrls: ['../expense.css'],
})
export class ExpenseAddNewComponent implements OnInit {
  private response: ExpensePageResponseComponent


  constructor(response: ExpensePageResponseComponent) {
    this.response = response;
  }

  ngOnInit(): void {
  }

}
