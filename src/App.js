import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//Container import
import Home from './Containers/Home'
import About from './Containers/Aboutus'
import Research from './Containers/Reaserch'
import Study from './Containers/Study'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/aboutus" exact component={About} />
          <Route path="/research" exact component={Research} />

          <Route path="/study" exact component={Study} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
