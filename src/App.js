import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CV from './components/CV'
import CX from './components/CX'
import seniorProject from './components/seniorProject'
import Artical from './components/Artical'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/CV" component={CV} />
          <Route path="/CX" component={CX} />
          <Route path="/Senior-Project" component={seniorProject} />
          <Route path="/Artical" component={Artical} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
