import {Component, OnInit} from '@angular/core';
import {ResponseExpenses} from "../model/response-expenses";
import {ExpensePageResponseComponent} from "../expense-page-response/expense-page-response.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {ExpenseModification} from "../model/expense-modification";
import {ExpenseRequest} from "../model/expense-request";
import {ExpenseService} from "../service/expense.service";
import {Expense} from "../model/expense";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['../expense.css'],
  providers: [DatePipe, ExpenseService]
})
export class ExpenseListComponent implements OnInit {
  expenseForm: FormGroup = this.expenseAddFormGroup()
  private expense: Expense = {};
  myDate: Date = new Date()
  stringDate: string | null = ''

  constructor(
    private response: ExpensePageResponseComponent,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private expenseService: ExpenseService) {
    this.stringDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.expenseAddFormGroup()
  }

  get responseExpenses(): ResponseExpenses {
    return this.response.responseExpenses;
  }

  expenseSubmit() {
    this.addExpense()
  }

  expenseAddFormGroup(): FormGroup {
    return this.expenseForm = new FormGroup({
      user: new FormControl('Radek', Validators.required),
      amount: new FormControl('0', Validators.required),
      currency: new FormControl('PLN', Validators.required),
      description: new FormControl('Some description', Validators.required),
      payDate: new FormControl(this.stringDate, Validators.required),
      payMethod: new FormControl('Credit card', Validators.required),
      expenseCategory: new FormControl('Some category', Validators.required),
    });
  }

  addExpense(): void {
    const expenseModification: ExpenseModification = {
      user: this.expenseForm.value.user,
      amount: this.expenseForm.value.amount,
      currency: this.expenseForm.value.currency,
      description: this.expenseForm.value.description,
      payDate: this.expenseForm.value.payDate,
      payMethod: this.expenseForm.value.payMethod,
      expenseCategory: this.expenseForm.value.expenseCategory,
    };

    const expenseRequest: ExpenseRequest = {
      expense: expenseModification
    };

    this.expenseService.editExpense(expenseRequest)
      .subscribe(expense => this.expense = expense)

    setTimeout(() => this.response.getMonthExpenses(), 500)

  }

  deleteExpense(id: any) {
    if (confirm('Are you sure to delete this expense?')) {
      this.expenseService.deleteExpense(id).subscribe();
      setTimeout(() => this.response.getMonthExpenses(), 500)
    }
  }

}
