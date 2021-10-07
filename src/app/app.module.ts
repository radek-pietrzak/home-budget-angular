import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {ExpenseListComponent} from './expense/expense-list/expense-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './expense/test/test.component';
import { ExpenseHeaderSortComponent } from './expense/expense-header-sort/expense-header-sort.component';
import { ExpensePageResponseComponent } from './expense/expense-page-response/expense-page-response.component';
import { ExpenseHeaderMonthComponent } from './expense/expense-header-month/expense-header-month.component';
import { ExpensePageCriteriaComponent } from './expense/expense-page-criteria/expense-page-criteria.component';
import { ExpenseSearchComponent } from './expense/expense-search/expense-search.component';
import { ExpenseDetailsComponent } from './expense/expense-details/expense-details.component';
import { ExpenseCategoryListComponent } from './expense/expense-category-list/expense-category-list.component';

const routes: Routes = [
  {
    component: ExpenseListComponent,
    path: 'expense-list'
  }, {
    path: '',
    redirectTo: '/expense-category',
    pathMatch: 'full'
  }, {
    component: ExpensePageResponseComponent,
    path: 'expense'
  }, {
    component: ExpenseDetailsComponent,
    path: 'expense/:id'
  }, {
    component: ExpenseCategoryListComponent,
    path: 'expense-category'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    TestComponent,
    ExpenseHeaderSortComponent,
    ExpensePageResponseComponent,
    ExpenseHeaderMonthComponent,
    ExpensePageCriteriaComponent,
    ExpenseSearchComponent,
    ExpenseDetailsComponent,
    ExpenseCategoryListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
