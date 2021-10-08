import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SearchSpecCriterion} from "../model/search-spec-criterion";
import {ExpenseCriteriaRequestService} from "../service/expense-criteria-request.service";
import {ExpensePageResponseComponent} from "../expense-page-response/expense-page-response.component";

@Component({
  selector: 'app-expense-search',
  templateUrl: './expense-search.component.html',
  styleUrls: ['../expense.css']
})
export class ExpenseSearchComponent implements OnInit {
  private response: ExpensePageResponseComponent

  form = this.setFormGroup();
  clearBtnDisabled = true;

  constructor(private request: ExpenseCriteriaRequestService,
              response: ExpensePageResponseComponent) {
    this.response = response
  }

  ngOnInit(): void {
  }

  setFormGroup(): FormGroup {
    return new FormGroup({
      search: new FormGroup({
        key: new FormControl(null, Validators.required),
        operation: new FormControl('CONTAINS', Validators.required),
        content: new FormControl(null, Validators.required)
      }),
      fromAmount: new FormGroup({
        key: new FormControl(null, Validators.required),
        operation: new FormControl('GREATER', Validators.required),
        content: new FormControl(null, Validators.required)
      }),
      toAmount: new FormGroup({
        key: new FormControl(null, Validators.required),
        operation: new FormControl('LESS', Validators.required),
        content: new FormControl(null, Validators.required)
      }),
      fromPayDate: new FormGroup({
        key: new FormControl(null, Validators.required),
        operation: new FormControl('GREATER', Validators.required),
        content: new FormControl(null, Validators.required)
      }),
      toPayDate: new FormGroup({
        key: new FormControl(null, Validators.required),
        operation: new FormControl('LESS', Validators.required),
        content: new FormControl(null, Validators.required)
      })
    });
  }

  submitSpecCriteria(): void {
    const searchCriterion: SearchSpecCriterion = {
      key: '',
      operation: 'CONTAINS',
      content: this.searchContent.value
    };

    const fromAmountCriterion: SearchSpecCriterion = {
      key: 'amount',
      operation: 'GREATER',
      content: this.fromAmountContent.value
    };

    const toAmountCriterion: SearchSpecCriterion = {
      key: 'amount',
      operation: 'LESS',
      content: this.toAmountContent.value
    };

    const fromPayDateCriterion: SearchSpecCriterion = {
      key: 'payDate',
      operation: 'GREATER',
      content: this.getPayDateFromDay(this.fromPayDateContent.value)
    };

    const toPayDateCriterion: SearchSpecCriterion = {
      key: 'payDate',
      operation: 'LESS',
      content: this.getPayDateToDay(this.toPayDateContent.value)
    };

    this.request.setCriteriaRequestBySpec(
      searchCriterion,
      fromAmountCriterion,
      toAmountCriterion,
      fromPayDateCriterion,
      toPayDateCriterion
    );

    this.response.getMonthExpenses();
    this.clearBtnDisabled = false;
  }

  get searchContent(): any {
    return this.form.get('search.content');
  }

  get fromAmountContent(): any {
    return this.form.get('fromAmount.content');
  }

  get toAmountContent(): any {
    return this.form.get('toAmount.content');
  }

  get fromPayDateContent(): any {
    return this.form.get('fromPayDate.content');
  }

  get toPayDateContent(): any {
    return this.form.get('toPayDate.content');
  }

  getPayDateFromDay(day: string): string {
    if (null !== day) {
      const dayNumber = Number(day);
      if (dayNumber > 9) {
        return this.response.responseExpenses.requestedDate?.substring(0, 8) + day;
      } else {
        return this.response.responseExpenses.requestedDate?.substring(0, 8) + '0' + day;
      }
    } else if (this.request.criteriaRequest.requestedDate != null) {
      return this.request.criteriaRequest.requestedDate
    }
    return '2021-07-31'
  }

  getPayDateToDay(day: string): string {
    if (null !== day) {
      const dayNumber = Number(day);
      if (dayNumber > 9) {
        return this.response.responseExpenses.requestedDate?.substring(0, 8) + day;
      } else {
        return this.response.responseExpenses.requestedDate?.substring(0, 8) + '0' + day;
      }
    } else if (this.response.responseExpenses.requestedDate != null) {
      return this.response.responseExpenses.requestedDate
    }
    return '2021-07-31'
  }

  clearSearch(): void {
    this.form.reset();
    this.submitSpecCriteria();
    this.clearBtnDisabled = true;
  }

  getLastDayOfMonth(): string {
    return <string>this.response.responseExpenses.requestedDate?.substring(8);
  }

}
