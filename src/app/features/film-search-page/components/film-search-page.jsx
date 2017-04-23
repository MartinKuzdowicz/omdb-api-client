import React, {Component} from 'react';
import SearchFilmsListUl from './search-films-list-ul';
import * as actions from '../actions/index.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  const actualStateFromReducer = state.filmSearchPageReducer.currSearchResultState;
  return {
    films: actualStateFromReducer.films,
    sortProp: actualStateFromReducer.sortProp
  }
};

class FilmSearchPage extends Component {

  inputToSearchResSortPropsMap(){
    return {
      'TITLE': 'Title',
      'DATE': 'Year'
    }
  }

  searchFilmsOnInput(e) {
    const {fetchFilmSearchResults, serachParamIsEmpty, sortProp} = this.props;
    const searchParam = e.currentTarget.value;
    if(searchParam === ''){
      serachParamIsEmpty();
      return;
    }
    fetchFilmSearchResults(searchParam, sortProp);
  }

  changeSortProp(e){
    const {changeSortParamTo} = this.props;
    const sortPropFromEvent = e.currentTarget.value;
    const searchResultSortProp = this.inputToSearchResSortPropsMap()[sortPropFromEvent];
    changeSortParamTo(searchResultSortProp);
  }

  render(){
    const {films} = this.props;

    return (
      <div>
        <h1>Film Search</h1>
        <input id="search-input" type="text" placeholder="Search..." onInput={this.searchFilmsOnInput.bind(this)} />

        <span>sort:</span>
        <input id="title-input" type="radio" name="sort-group" value={Object.keys(this.inputToSearchResSortPropsMap())[0]} defaultChecked="true" onChange={this.changeSortProp.bind(this)} />
        <label htmlFor="title-input">Title</label>,

        <input id="date-input" type="radio" name="sort-group" value={Object.keys(this.inputToSearchResSortPropsMap())[1]} onChange={this.changeSortProp.bind(this)} />
        <label htmlFor="date-input">Date</label>

        <SearchFilmsListUl films={films} />
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(FilmSearchPage);
