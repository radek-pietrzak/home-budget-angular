import {Transaction} from './transaction';

export class ResponseExpenses {
  page?: any;
  hasNextPage?: boolean;
  totalPages?: number;
  currentDate?: string;
  requestedDate?: string;
  transactions?: Transaction[];
}
