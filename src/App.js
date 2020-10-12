import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;