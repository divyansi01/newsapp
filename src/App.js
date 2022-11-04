import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import NewsItem from './Components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={5} country="in" category="Science" />
      </div>
    )
  }
}

