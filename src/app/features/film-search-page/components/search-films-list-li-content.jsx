import React, {Component} from 'react';
import {withRouter} from 'react-router';

class SearchFilmsListLiContent extends Component {

  constructor(props){
    super(props);
    this.state = {
      filmItemDetailAreHidden: true
    }
  }

  toggleFilmDetials(){
    const currentActiveState = this.state.filmItemDetailAreHidden;
    this.setState({
      filmItemDetailAreHidden: !currentActiveState
    });
  }

  showFilmFullDetails(e){
    e.stopPropagation();
    const filmIMDBId = this.props.filmItem.imdbID;
    this.props.router.push(`/film-full-details/${filmIMDBId}`);
  }

  render(){
    const filmData = this.props.filmItem;
    const filmDetailsClassAttr = this.state.filmItemDetailAreHidden ? 'hide' : '';
    return (
      <li onClick={this.toggleFilmDetials.bind(this)} >
        {filmData.Title}
        <div className={filmDetailsClassAttr} >
          <p className="film-list-li-details-desc" >Year: {filmData.Year}, imdbID: {filmData.imdbID}</p>
          <img src={filmData.Poster} onClick={this.showFilmFullDetails.bind(this)} />
        </div>
      </li>
    );
  }
}

export default withRouter(SearchFilmsListLiContent);
