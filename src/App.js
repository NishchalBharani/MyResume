import React from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Profile from './Components/Profile'
import Projects from './Components/Projects'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Switch>
        <Route path="/skills" component={Skills} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default App