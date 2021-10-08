import {ExpenseCategory} from "./expense-category";
import {Page} from "./page";

export class ExpenseCategoryResponse {
  page?: Page;
  hasNextPage?: boolean;
  totalPages?: number;
  currentDate?: string;
  requestedDate?: string;
  expenseCategories?: ExpenseCategory[];
}
