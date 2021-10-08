import {Component, OnInit} from '@angular/core';
import {ExpenseCriteriaRequestService} from "../service/expense-criteria-request.service";
import {SearchSortCriterion} from "../model/search-sort-criterion";
import {ExpensePageResponseComponent} from "../expense-page-response/expense-page-response.component";

@Component({
  selector: '[app-expense-header-sort]',
  templateUrl: './expense-header-sort.component.html',
  styleUrls: ['../expense.css'],
})
export class ExpenseHeaderSortComponent implements OnInit {
  private criteria: ExpenseCriteriaRequestService
  private response: ExpensePageResponseComponent

  private searchSortCriteria: SearchSortCriterion[] = []

  showSortDefaultUserBtn = true
  showSortUpUserBtn = false
  showSortDownUserBtn = false

  showSortDefaultAmountBtn = true
  showSortUpAmountBtn = false
  showSortDownAmountBtn = false

  showSortDefaultCurrencyBtn = true
  showSortUpCurrencyBtn = false
  showSortDownCurrencyBtn = false

  showSortDefaultDescriptionBtn = true
  showSortUpDescriptionBtn = false
  showSortDownDescriptionBtn = false

  showSortDefaultCategoryBtn = true
  showSortUpCategoryBtn = false
  showSortDownCategoryBtn = false

  showSortDefaultPayMethodBtn = true
  showSortUpPayMethodBtn = false
  showSortDownPayMethodBtn = false

  showSortDefaultPayDateBtn = true
  showSortUpPayDateBtn = false
  showSortDownPayDateBtn = false

  constructor(criteria: ExpenseCriteriaRequestService, response: ExpensePageResponseComponent) {
    this.criteria = criteria;
    this.response = response;
  }

  ngOnInit(): void {
  }

  sortDefault(): void {
    this.searchSortCriteria = []
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
  }

  sortUpUser(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'user',
      operation: 'ASC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultUserBtn = false
    this.showSortUpUserBtn = true
  }

  sortDownUser(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'user',
      operation: 'DESC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultUserBtn = false
    this.showSortDownUserBtn = true
  }

  sortUpAmount(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'amount',
      operation: 'ASC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultAmountBtn = false
    this.showSortUpAmountBtn = true
  }

  sortDownAmount(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'amount',
      operation: 'DESC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultAmountBtn = false
    this.showSortDownAmountBtn = true
  }

  sortUpCurrency(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'currency',
      operation: 'ASC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultCurrencyBtn = false
    this.showSortUpCurrencyBtn = true
  }

  sortDownCurrency(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'currency',
      operation: 'DESC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultCurrencyBtn = false
    this.showSortDownCurrencyBtn = true
  }

  sortUpDescription(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'description',
      operation: 'ASC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultDescriptionBtn = false
    this.showSortUpDescriptionBtn = true
  }

  sortDownDescription(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'description',
      operation: 'DESC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultDescriptionBtn = false
    this.showSortDownDescriptionBtn = true
  }

  sortUpCategory(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'expenseCategory.categoryName',
      operation: 'ASC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultCategoryBtn = false
    this.showSortUpCategoryBtn = true
  }

  sortDownCategory(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'expenseCategory.categoryName',
      operation: 'DESC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultCategoryBtn = false
    this.showSortDownCategoryBtn = true
  }

  sortUpPayMethod(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'payMethod.payMethodName',
      operation: 'ASC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultPayMethodBtn = false
    this.showSortUpPayMethodBtn = true
  }

  sortDownPayMethod(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'payMethod.payMethodName',
      operation: 'DESC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultPayMethodBtn = false
    this.showSortDownPayMethodBtn = true
  }

  sortUpPayDate(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'payDate',
      operation: 'ASC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultPayDateBtn = false
    this.showSortUpPayDateBtn = true
  }

  sortDownPayDate(): void {
    let searchSortCriterion: SearchSortCriterion = {
      key: 'payDate',
      operation: 'DESC'
    }
    this.searchSortCriteria = [searchSortCriterion]
    this.criteria.criteriaRequest.searchSortCriteria = this.searchSortCriteria
    this.response.getMonthExpenses()
    this.showOnlyDefaultBtns()
    this.showSortDefaultPayDateBtn = false
    this.showSortDownPayDateBtn = true
  }

  showOnlyDefaultBtns(): void {
    this.showSortDefaultUserBtn = true
    this.showSortDefaultAmountBtn = true
    this.showSortDefaultCurrencyBtn = true
    this.showSortDefaultDescriptionBtn = true
    this.showSortDefaultCategoryBtn = true
    this.showSortDefaultPayMethodBtn = true
    this.showSortDefaultPayDateBtn = true

    this.showSortUpUserBtn = false
    this.showSortDownUserBtn = false

    this.showSortUpAmountBtn = false
    this.showSortDownAmountBtn = false

    this.showSortUpCurrencyBtn = false
    this.showSortDownCurrencyBtn = false

    this.showSortUpDescriptionBtn = false
    this.showSortDownDescriptionBtn = false

    this.showSortUpCategoryBtn = false
    this.showSortDownCategoryBtn = false

    this.showSortUpPayMethodBtn = false
    this.showSortDownPayMethodBtn = false

    this.showSortUpPayDateBtn = false
    this.showSortDownPayDateBtn = false
  }

}
