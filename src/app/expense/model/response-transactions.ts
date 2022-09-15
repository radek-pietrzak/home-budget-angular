import {Transaction} from './transaction';

export class ResponseTransactions {
  page?: any;
  hasNextPage?: boolean;
  totalPages?: number;
  currentDate?: string;
  requestedDate?: string;
  expenses?: Transaction[];
}
