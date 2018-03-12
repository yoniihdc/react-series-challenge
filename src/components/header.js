import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Searchbar from './searchbar';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/" activeClassName="active" exact>Trending</NavLink>
        <NavLink to="/favorites" activeClassName="active">Favorites</NavLink>
        <Searchbar />
      </div>
    )
  }
}

export default Header;