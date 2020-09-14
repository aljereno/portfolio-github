import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './screens/Homepage';
import About from "./screens/About";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    {/* //Switch makes sure that only one route is displayed as once, similar to exact keyword */}
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/about' exact component={About}/>
        <Route path='/' render={() => <div>404</div>}/>
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;
