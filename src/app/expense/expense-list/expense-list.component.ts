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
  expenseForm: FormGroup = this.expenseAddFormGroup();
  private expense: Expense = {};
  todayDate: Date = new Date();
  stringDate: string | null = '';
  edit = false;
  expenseId: string = '0';
  addNew = false;

  constructor(
    private response: ExpensePageResponseComponent,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private expenseService: ExpenseService) {
    this.stringDate = this.datePipe.transform(this.todayDate, 'yyyy-MM-dd');
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

  expenseUpdateFormGroup(): FormGroup {
    return this.expenseForm = new FormGroup({
      user: new FormControl(this.expense.user, Validators.required),
      amount: new FormControl(this.expense.amount, Validators.required),
      currency: new FormControl(this.expense.currency, Validators.required),
      description: new FormControl(this.expense.description, Validators.required),
      payDate: new FormControl(this.expense.payDate, Validators.required),
      payMethod: new FormControl(this.expense.payMethod, Validators.required),
      expenseCategory: new FormControl(this.expense.expenseCategory, Validators.required),
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

  updateExpense() {
    const expenseModification: ExpenseModification = {
      id: this.expenseId,
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

    this.expenseService.editExpense(expenseRequest).subscribe();
    setTimeout(() => this.response.getMonthExpenses(), 500)

  }

  setEditOn(id: any): void {
    this.expenseId = id;
    this.expenseService.getExpense(id).subscribe(response => this.expense = response);

    setTimeout(() => this.expenseUpdateFormGroup(), 100);

    this.edit = true;

  }

  setEditOffNoUpdate() {
    setTimeout(() => this.expenseAddFormGroup(), 100);
    this.edit = false;
    this.response.getMonthExpenses();
  }

  setEditOffWithUpdate() {
    setTimeout(() => this.expenseAddFormGroup(), 100);
    this.updateExpense();
    this.edit = false;
    this.response.getMonthExpenses();
  }

  deleteExpense(id: any) {
    if (confirm('Are you sure to delete this expense?')) {
      this.expenseService.deleteExpense(id).subscribe();
      setTimeout(() => this.response.getMonthExpenses(), 500)
    }
  }

  addNewRow() {
    this.addNew = !this.addNew;
  }

}
