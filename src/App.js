// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const [progress, setProgress] = useState(0);
  const pageSize = 6;


  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />

        <Routes>
          <Route exact path="/" element={<News setProgres={setProgress} key="General" pageSize={pageSize} country="in" category="General" />}></Route>
          <Route exact path="/Business" element={<News setProgres={setProgress} key="Business" pageSize={pageSize} country="in" category="Business" />}></Route>
          <Route exact path="/General" element={<News setProgres={setProgress} key="General" pageSize={pageSize} country="in" category="General" />}></Route>
          <Route exact path="/Science" element={<News setProgres={setProgress} key="Science" pageSize={pageSize} country="in" category="Science" />}></Route>
          <Route exact path="/Technology" element={<News setProgres={setProgress} key="technology" pageSize={pageSize} country="in" category="Technology" />}></Route>
          <Route exact path="/Sports" element={<News setProgres={setProgress} key="Sports" pageSize={pageSize} country="in" category="Sports" />}></Route>
          <Route exact path="/Entertainment" element={<News setProgres={setProgress} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" />}></Route>
          <Route exact path="/Health" element={<News setProgres={setProgress} key="Health" pageSize={pageSize} country="in" category="Health" />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;