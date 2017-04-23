import { combineReducers } from 'redux';
import SortUtils from '../../../utils/sort-utils';

const initialState = {
  films: [],
  sortProp: 'Title',
  errorMsg: ''
};

export const currSearchResultState = (state = initialState, action) => {
  switch (action.type) {
    case 'OMDB_API_ERROR':
      return { errorMsg: action.errorDescription };
    case 'OMDB_API_SEARCH_RESULT':
      return { films: action.searchResult };
    case 'SEARCH_PARAM_IS_EMPTY':
      return { films: [] }
    case 'SORT_PARAM_CHANGE':
      const sortParam = action.sortProp;
      console.log(sortParam);
      const desc = (sortParam == 'Year');
      const sortedSearchRes = state.films.sort(SortUtils.getComparatorFuncToSortArrayOfObjectsByProp(sortParam, desc));
      return {
        films: sortedSearchRes,
        sortProp: sortParam
      }
    default:
    return state;
  }
};

const filmSearchResult = () => {
  return combineReducers({
		currSearchResultState
	});
}

export default filmSearchResult();
