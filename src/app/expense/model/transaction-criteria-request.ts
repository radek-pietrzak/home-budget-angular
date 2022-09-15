import {Page} from './page';
import {SearchSortCriterion} from './search-sort-criterion';
import {SearchSpecCriterion} from './search-spec-criterion';

export class TransactionCriteriaRequest {
  page?: Page;
  requestedDate?: string;
  searchSortCriteria?: SearchSortCriterion [];
  searchSpecCriteria?: SearchSpecCriterion [];

}
