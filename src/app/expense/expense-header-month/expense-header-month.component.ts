import {Component, OnInit} from '@angular/core';
import {ExpensePageResponseComponent} from "../expense-page-response/expense-page-response.component";
import {ExpenseCriteriaRequestService} from "../service/expense-criteria-request.service";

@Component({
  selector: 'app-expense-page-header-month',
  templateUrl: './expense-header-month.component.html',
  styleUrls: ['../expense.css'],
  providers: []
})
export class ExpenseHeaderMonthComponent implements OnInit {
  private response: ExpensePageResponseComponent
  private request: ExpenseCriteriaRequestService;

  constructor(
    response: ExpensePageResponseComponent,
    request: ExpenseCriteriaRequestService,
  ) {
    this.response = response;
    this.request = request;
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

  previousMonth(): void {
    const monthString = this.response.responseExpenses.requestedDate?.substring(5, 7);
    let monthNumber = Number(monthString);
    const yearString = this.response.responseExpenses.requestedDate?.substring(0, 4);
    let yearNumber = Number(yearString);
    monthNumber -= 1;
    if (monthNumber < 1) {
      monthNumber = 12;
      yearNumber = yearNumber - 1;
    }

    if (monthNumber < 10) {
      this.request.criteriaRequest.requestedDate = yearNumber + '-0' + monthNumber + '-01';
    } else {
      this.request.criteriaRequest.requestedDate = yearNumber + '-' + monthNumber + '-01';
    }

    this.response.getMonthExpenses();
  }

  nextMonth(): void {
    const monthString = this.response.responseExpenses.requestedDate?.substring(5, 7);
    let monthNumber = Number(monthString);
    const yearString = this.response.responseExpenses.requestedDate?.substring(0, 4);
    let yearNumber = Number(yearString);
    monthNumber += 1;
    if (monthNumber > 12) {
      monthNumber = 1;
      yearNumber = yearNumber + 1;
    }

    if (monthNumber < 10) {
      this.request.criteriaRequest.requestedDate = yearNumber + '-0' + monthNumber + '-01';
    } else {
      this.request.criteriaRequest.requestedDate = yearNumber + '-' + monthNumber + '-01';
    }

    this.response.getMonthExpenses();
  }

  changeToCurrentMonth(): void {
    this.request.criteriaRequest.requestedDate = this.response.responseExpenses.currentDate;
    this.response.getMonthExpenses();
  }


}
