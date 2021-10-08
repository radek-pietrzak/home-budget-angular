import {Component, OnInit} from '@angular/core';
import {ExpenseCategoryService} from "../service/expense-category.service";
import {ExpenseCategoryCriteriaRequest} from "../model/expense-category-criteria-request";
import {Page} from "../model/page";
import {ExpenseCategoryResponse} from "../model/expense-category-response";
import {SearchSortCriterion} from "../model/search-sort-criterion";

@Component({
  selector: 'app-expense-category-list',
  templateUrl: './expense-category-list.component.html',
  styleUrls: ['../expense.css'],
})
export class ExpenseCategoryListComponent implements OnInit {
  private categoryService: ExpenseCategoryService;

  private _response: ExpenseCategoryResponse = {};
  // categoryForm: any;
  page: Page = {
    number: 0,
    size: 100
  }
  sortCriterion: SearchSortCriterion = {
    key: 'id',
    operation: 'ASC'
  }
  criteriaRequest: ExpenseCategoryCriteriaRequest = {
    page: this.page,
    searchSortCriteria: [this.sortCriterion]
  }


  constructor(categoryService: ExpenseCategoryService) {
    this.categoryService = categoryService;
  }

  ngOnInit(): void {
    this.getCategories()
  }


  get response(): ExpenseCategoryResponse {
    return this._response;
  }

  getCategories() {
    this.categoryService.getCategories(this.criteriaRequest)
      .subscribe(response => this._response = response)
  }

  updateCategory() {

  }
}
