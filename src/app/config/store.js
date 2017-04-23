import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import filmSearchPageReducer from '../features/film-search-page/reducers';
import oneFilmFullDetailsPageReducer from '../features/film-full-details-page/reducers';

const filmSearchReducers = combineReducers({
	filmSearchPageReducer,
	oneFilmFullDetailsPageReducer
});

const configureStore = () => {
	const logger = createLogger();
	const middlewares = [thunk, logger];
	return createStore(
		filmSearchReducers,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;
