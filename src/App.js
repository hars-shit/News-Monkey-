import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={10}
     
      />
      <NavBar/>
      <Routes>
      <Route exact path="/" element = {<News key="general" country = "in" category = "general"/>} ></Route>
        <Route exact path="/General" element = {<News key="general" country = "in" category = "general"/>} ></Route>
        <Route exact path="/Business"element={<News key="business" country="in" category="business"/>} ></Route>
        <Route exact path='/Entertainment'element={<News key="entertainment" country="in" category="entertainment"/>}></Route>
        <Route exact path='/Health'element={<News key="health" country="in" category="health"/>}></Route>
        <Route exact path='/Sports'element={<News key="sports" country="in" category="sports"/>}></Route>
        <Route exact path='/Science'element={<News key="science" country="in" category="science"/>}></Route>
        <Route exact path='/Technology'element={<News key="technology" country="in" category="technology"/>}></Route>
        
      </Routes>
      </Router>
      </div>
    )
  }
}
