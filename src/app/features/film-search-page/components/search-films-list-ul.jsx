import React, {Component} from 'react';
import SearchFilmsListLiContent from './search-films-list-li-content';

class SearchFilmsListUl extends Component {

  mapFilmsArrToLiElems(filmsArr){
    if(!filmsArr || filmsArr.length === 0){
      return null;
    }
    return filmsArr.map(el => {
        return ( <SearchFilmsListLiContent key={el.imdbID} filmItem={el} /> )
      });
    }

  render(){
    const filmsArr = this.props.films;
    const liElements = this.mapFilmsArrToLiElems(filmsArr);
    return (
      <ul className="film-list">
        {liElements}
      </ul>
    );
  }
}

export default SearchFilmsListUl;
