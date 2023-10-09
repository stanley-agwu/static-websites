import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import News from "./components/News"
import Contact from "./components/Contact-Us"
import Navbar from "./components/CustomNavbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
      </Switch>
    <Footer />
    </Router>
  );
}

export default App;
