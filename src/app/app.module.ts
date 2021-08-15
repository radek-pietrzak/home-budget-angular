import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {ExpenseListComponent} from './expense/expense-list/expense-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './expense/test/test.component';

const routes: Routes = [
  {
    component: ExpenseListComponent,
    path: 'expense-list'
  }, {
    path: '',
    redirectTo: '/expense-list',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    TestComponent
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
