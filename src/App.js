import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Mainbar from './Components/Navbar/Mainbar';
import Body from './Components/Body/Body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SigleItem from './Components/SingleView/SigleItem';
import Nothing from './Components/Nothing/Nothing';



function App() {
  return (
    
  <Router>
    <Switch>
      <Route exact path="/">
        <Body></Body>
      </Route>
      <Route path="/singleItem/:id">
        <SigleItem></SigleItem>
      </Route>
      <Route path="*">
        <Nothing></Nothing>
      </Route>
    </Switch>
  </Router>
    
    
  );
}

export default App;
