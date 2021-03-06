import {Injectable} from '@angular/core';
import {ExpenseCriteriaRequest} from "../model/expense-criteria-request";
import {Page} from "../model/page";
import {SearchSpecCriterion} from "../model/search-spec-criterion";

@Injectable({
  providedIn: 'root'
})
export class ExpenseCriteriaRequestService {

  private _page: Page = {
    number: 0,
    size: 10
  }

  private _criteriaRequest: ExpenseCriteriaRequest = {
    page: this._page
  };

  constructor() {
  }

  get criteriaRequest(): ExpenseCriteriaRequest {
    return this._criteriaRequest;
  }

  get page(): Page {
    return this._page;
  }

  setCriteriaRequestBySpec(
    searchCriterion: SearchSpecCriterion,
    fromAmountCriterion: SearchSpecCriterion,
    toAmountCriterion: SearchSpecCriterion,
    fromPayDateCriterion: SearchSpecCriterion,
    toPayDateCriterion: SearchSpecCriterion
  ): void {
    this._criteriaRequest.searchSpecCriteria = [
      searchCriterion,
      fromAmountCriterion,
      toAmountCriterion,
      fromPayDateCriterion,
      toPayDateCriterion
    ];
  }

}
