import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../service/transaction.service";
import {TransactionCriteriaRequestService} from "../service/transaction-criteria-request.service";
import {ResponseTransactions} from "../model/response-transactions";

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page-response.component.html',
  styleUrls: ['../transaction.css'],
})
export class TransactionPageResponseComponent implements OnInit {

  private transactionService: TransactionService;
  private criteriaRequest: TransactionCriteriaRequestService;


  private _responseTransactions: ResponseTransactions = {};

  constructor(transactionService: TransactionService, criteriaRequest: TransactionCriteriaRequestService) {
    this.transactionService = transactionService;
    this.criteriaRequest = criteriaRequest;
  }

  get responseTransactions(): ResponseTransactions {
    return this._responseTransactions;
  }

  ngOnInit(): void {
    this.getMonthTransactions()
  }

  getMonthTransactions(): void {
    this.transactionService.getMonthTransactions(this.criteriaRequest.criteriaRequest)
      .subscribe(response => this._responseTransactions = response);
  }


}
