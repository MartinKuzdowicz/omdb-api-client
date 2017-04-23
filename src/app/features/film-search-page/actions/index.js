import axios from 'axios';
import SortUtils from '../../../utils/sort-utils';

const _apiFail = (type, error) => {
	return ({
		type: type,
		errorDescription: error
	})
};

const _reciveSearchFilmsData = (_data) => ({
  type: 'OMDB_API_SEARCH_RESULT',
  searchResult: _data
});


export const serachParamIsEmpty = () => ({
  type: 'SEARCH_PARAM_IS_EMPTY'
});

export const changeSortParamTo = (_param) => ({
	type: 'SORT_PARAM_CHANGE',
	sortProp: _param
})

export const fetchFilmSearchResults = (searchParam, sortParam) => (dispatch) => {

  axios.get(`https://www.omdbapi.com/?s=${searchParam}`).then(res => {

    if(res.data.Error || !res.data.Search){
      return;
    }

    const serachResultsArr = res.data.Search.sort(SortUtils.getComparatorFuncToSortArrayOfObjectsByProp(sortParam));
    dispatch(_reciveSearchFilmsData(serachResultsArr));

  }).catch(err => {
    dispatch(_apiFail('OMDB_API_ERROR', err));
  });

};
