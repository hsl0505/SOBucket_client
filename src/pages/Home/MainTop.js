import React, { Component } from 'react';
import MainSearch from './MainSearch';
import MainNav from './MainNav';

export default class MainTop extends Component {
  render() {
    return (
      <div>
        <MainSearch />
        <MainNav />
        <div className="mainImg">img</div>
      </div>
    );
  }
}
