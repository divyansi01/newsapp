// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import NewsItem from './Components/NewsItem';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 5;

  state = {
    progress: 0
  }


  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />

          <Routes>
            <Route exact path="/" element={<News setProgess={this.setProgress} key="General" pageSize={this.pageSize} country="in" category="General" />}></Route>
            <Route exact path="/Business" element={<News setProgess={this.setProgress} key="Business" pageSize={this.pageSize} country="in" category="Business" />}></Route>
            <Route exact path="/General" element={<News setProgess={this.setProgress} key="General" pageSize={this.pageSize} country="in" category="General" />}></Route>
            <Route exact path="/Science" element={<News setProgess={this.setProgress} key="Science" pageSize={this.pageSize} country="in" category="Science" />}></Route>
            <Route exact path="/Technology" element={<News setProgess={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="Technology" />}></Route>
            <Route exact path="/Sports" element={<News setProgess={this.setProgress} key="Sports" pageSize={this.pageSize} country="in" category="Sports" />}></Route>
            <Route exact path="/Entertainment" element={<News setProgess={this.setProgress} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />}></Route>
            <Route exact path="/Health" element={<News setProgess={this.setProgress} key="Health" pageSize={this.pageSize} country="in" category="Health" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

