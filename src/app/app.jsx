import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MainLayout from './features/layout/components/main-layout';
import FilmSearchPage from './features/film-search-page/components/film-search-page';
import FilmFullDetailsPage from './features/film-full-details-page/components/film-full-details-page';

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={MainLayout}>
					<IndexRoute component={FilmSearchPage}/>
					<Route path='/film-search' component={FilmSearchPage} />
					<Route path='/film-full-details/:imdbId' component={FilmFullDetailsPage} />
				</Route>
			</Router>
		);
	}
}

export default App;
