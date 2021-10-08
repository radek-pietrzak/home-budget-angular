import {Injectable} from '@angular/core';
import {ExpenseCriteriaRequest} from "../model/expense-criteria-request";

@Injectable({
  providedIn: 'root'
})
export class ExpenseCriteriaRequestService {

  private _criteriaRequest: ExpenseCriteriaRequest = {
  };

  constructor() {
  }


  get criteriaRequest(): ExpenseCriteriaRequest {
    return this._criteriaRequest;
  }
}
