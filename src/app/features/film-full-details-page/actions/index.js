import axios from 'axios';

const _apiFail = (type, error) => {
	return ({
		type: type,
		errorDescription: error
	})
};

const _fetchOneFilmFullDetails = (_data) => ({
  type: 'OMDB_API_ONE_FILM_FULL_DETAILS_RESULT',
  filmDetails: _data
});

export const fetchOneFilmFullDetails = (omdbid) => (dispatch) => {
  axios.get(`http://www.omdbapi.com/?i=${omdbid}&plot=full`)
    .then(res => dispatch(_fetchOneFilmFullDetails(res.data)))
    .catch(err => dispatch(_apiFail('OMDB_API_ONE_FILM_FULL_DETAILS_ERROR', err)));
};
