import {Component, OnInit} from '@angular/core';
import {ExpenseService} from "../service/expense.service";
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Expense} from "../model/expense";
import {ExpenseModification} from "../model/expense-modification";
import {ExpenseRequest} from "../model/expense-request";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['../expense.css'],
  providers: [ExpenseService, DatePipe]
})
export class ExpenseDetailsComponent implements OnInit {

  expenseForm: FormGroup = new FormGroup({});
  expense: Expense = {};
  edit = false;
  private todayDate: Date = new Date();
  private stringDate: string | null;
  private id$: any;
  private id: any;

  constructor(private datePipe: DatePipe,
              private route: ActivatedRoute,
              private expenseService: ExpenseService,) {
    this.stringDate = this.datePipe.transform(this.todayDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.id$ = this.route.paramMap.pipe(map(paramMap => paramMap.get('id')));
    this.id = this.route.snapshot.paramMap.get('id');
    this.expenseService.getExpense(this.id).subscribe(expense => {
      this.expense = expense;
    });
    setTimeout(() => this.expenseUpdateFormGroup(), 500)
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

  updateExpense(): void {
    const expenseModification: ExpenseModification = {
      id: this.expense.id,
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

    if (confirm('Are you sure to update this expense?')) {
      this.expenseService
        .editExpense(expenseRequest)
        .subscribe(() => {
          this.expenseService.getExpense(this.id).subscribe(expense => {
            this.expense = expense;
            window.location.reload();
          });
        });
    }
  }


  deleteExpense(id: string): void {
    if (confirm('Are you sure to delete this expense?')) {
      this.expenseService.deleteExpense(id).subscribe();
      this.ngOnInit();
    }
  }

  setEditOn(): void {
    this.edit = true;
  }

  discardChanges(): void {
    if (confirm('Are you sure to discard changes?')) {
      window.location.reload();
    }
  }
}

