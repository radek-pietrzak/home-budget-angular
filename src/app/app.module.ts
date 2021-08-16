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
import { ExpensePageComponent } from './expense/expense-page/expense-page.component';

const routes: Routes = [
  {
    component: ExpenseListComponent,
    path: 'expense-list'
  }, {
    path: '',
    redirectTo: '/expense',
    pathMatch: 'full'
  }, {
    component: ExpenseListComponent,
    path: 'expense'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    TestComponent,
    ExpenseHeaderSortComponent,
    ExpensePageComponent
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
