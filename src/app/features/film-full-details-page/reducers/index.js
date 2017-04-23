import { combineReducers } from 'redux';

const initialState = {
  filmDetails: {},
  errorMsg: ''
}

export const filmDetailsResult = (state = initialState, action) => {
  switch (action.type) {
    case 'OMDB_API_ONE_FILM_FULL_DETAILS_RESULT':
      return { filmDetails: action.filmDetails };
    case 'OMDB_API_ONE_FILM_FULL_DETAILS_ERROR':
      return { errorMsg: action.errorDescription };
    default:
      return state;
  }
};

const oneFilmDetails = () => {
  return combineReducers({
		filmDetailsResult
	});
};

export default oneFilmDetails();
