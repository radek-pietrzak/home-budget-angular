import {Expense} from './expense';

export class ResponseExpenses {
  page?: any;
  hasNextPage?: boolean;
  totalPages?: number;
  currentDate?: string;
  requestedDate?: string;
  expenses?: Expense[];
}
