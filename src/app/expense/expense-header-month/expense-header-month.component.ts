import {Component, OnInit} from '@angular/core';
import {ExpensePageResponseComponent} from "../expense-page-response/expense-page-response.component";

@Component({
  selector: 'app-expense-page-header-month',
  templateUrl: './expense-header-month.component.html',
  styleUrls: ['../expense.css'],
  providers: []
})
export class ExpenseHeaderMonthComponent implements OnInit {

  constructor(private response: ExpensePageResponseComponent) {
  }

  ngOnInit(): void {
  }

  getMonthName(): string {
    if (null != this.response.responseExpenses.requestedDate) {
      let month = this.response.responseExpenses.requestedDate.substring(5, 7);

      switch (month) {
        case '01':
          month = 'January';
          break;
        case '02':
          month = 'February';
          break;
        case '03':
          month = 'March';
          break;
        case '04':
          month = 'April';
          break;
        case '05':
          month = 'May';
          break;
        case '06':
          month = 'June';
          break;
        case '07':
          month = 'July';
          break;
        case '08':
          month = 'August';
          break;
        case '09':
          month = 'September';
          break;
        case '10':
          month = 'October';
          break;
        case '11':
          month = 'November';
          break;
        case '12':
          month = 'December';
          break;
        default:
          month = 'Can\'t read the month';
      }
      return month;
    }
    return 'Can\'t read the month';
  }

  getYear(): string {
    if (null != this.response.responseExpenses.requestedDate) {
      return this.response.responseExpenses.requestedDate.substring(0, 4);
    }
    return 'Can\'t read the year';
  }

}
