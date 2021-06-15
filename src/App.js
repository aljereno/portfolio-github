import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './screens/Homepage';
import About from "./screens/About";
import NavBar from "./components/NavBar";
import Completed from "./screens/Completed";
import Ongoing from "./screens/Ongoing";
import ProjectInfo from "./singlescreens/ProjectInfo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GenshinScreen from './screens/GenshinScreen';
import Quarantine from './singlescreens/Quarantine';
import Entertainment from './screens/Entertainment';
import Weatherbox from './singlescreens/Weatherbox';
import TestingScreen from './screens/TestingScreen';
import LegLite from './singlescreens/LegLite';
import BeyondLibrary from './singlescreens/BeyondLibrary';
import ImgProcessing from './singlescreens/ImgProcessing';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    {/* //Switch makes sure that only one route is displayed as once, similar to exact keyword */}
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/about' exact component={About}/>
        <Route path='/completed' exact component={Completed}/>
        <Route path ='/entertainment' exact component={Entertainment}/>
        <Route path='/ongoing' exact component={Ongoing}/>
        <Route path='/genshinScreen' exact component={GenshinScreen}/>
        <Route path='/quarantine' exact component={Quarantine}/>
        <Route path='/weatherbox' exact component={Weatherbox}/>
        <Route path='/projectInfo' exact component={ProjectInfo}/>
        <Route path='/testing' exact component={TestingScreen}/>
        <Route path='/leglite' exact component={LegLite}/>
        <Route path='/beyond' exact component={BeyondLibrary}/>
        <Route path='/imgProcessing' exact component={ImgProcessing}/>
        <Route path='/' render={() => <div>404</div>}/>
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;
