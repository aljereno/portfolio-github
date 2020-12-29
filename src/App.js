import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './screens/Homepage';
import About from "./screens/About";
import NavBar from "./components/NavBar";
import Completed from "./screens/Completed";
import Ongoing from "./screens/Ongoing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GenshinScreen from './screens/GenshinScreen';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    {/* //Switch makes sure that only one route is displayed as once, similar to exact keyword */}
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/about' exact component={About}/>
        <Route path='/completed' exact component={Completed}/>
        <Route path='/ongoing' exact component={Ongoing}/>
        <Route path='/genshinScreen' exact component={GenshinScreen}/>
        <Route path='/' render={() => <div>404</div>}/>
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;
