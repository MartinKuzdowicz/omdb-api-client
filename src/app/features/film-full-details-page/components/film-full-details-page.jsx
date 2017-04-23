import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const actualStateFromReducer = state.oneFilmFullDetailsPageReducer.filmDetailsResult;
  return {
    film: actualStateFromReducer.filmDetails
  }
};

class FilmFullDetailsPage extends Component {

  componentWillMount(){
    const {fetchOneFilmFullDetails} = this.props;
    const filmIMDBId = this.props.params.imdbId;
    fetchOneFilmFullDetails(filmIMDBId);
  }

  render() {
    const {film} = this.props;
    const ratings = film.Ratings && film.Ratings.length > 0 ? film.Ratings[0].Value : '';

    return (
      <div className="one-film-full-desc" >
        <div className="first-section" >
          <h1>{film.Title}</h1>
          <h3 className="one-film-ratings-year-time-sec" >
            <span className="one-film-ratings">{ratings}</span> {film.Country} | {film.Year} | {film.Runtime}
          </h3>
           <div className="first-section-img">
             <img src={film.Poster} />
           </div>
          <div>
          </div>
        </div>
        <div>
          <ul>
            <li>Director: {film.Director}</li>
            <li>Writer: {film.Writer}</li>
            <li>Genres: {film.Genre}</li>
            <li>Starring: {film.Actors}</li>
            <li>Awards: {film.Awards}</li>
          </ul>
        </div>
        <div className="one-film-full-desc-plot" >
          <p>
            {film.Plot}
          </p>
        </div>
        <div>
          <ul>
            <li>Released: {film.Released}</li>
            <li>DVD: {film.DVD}</li>
            <li>Production: {film.Production}</li>
            <li>Website: <a target="_blank" href={film.Website} >{film.Website}</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(FilmFullDetailsPage);
