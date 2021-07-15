import React, { useState } from 'react';
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
// import TestingScreen from './screens/TestingScreen';
import LegLite from './singlescreens/LegLite';
import BeyondLibrary from './singlescreens/BeyondLibrary';
import ImgProcessing from './singlescreens/ImgProcessing';
import FireChart from './singlescreens/FireChart';
import FlatFoot from './singlescreens/FlatFoot';
import Login from './screens/Login'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
    <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    {/* //Switch makes sure that only one route is displayed as once, similar to exact keyword */}
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/about' exact component={About}/>
        <Route path='/completed' exact component={Completed}/>
        <Route path ='/entertainment' exact component={() => <Entertainment loggedIn={loggedIn}/>}/>
        <Route path='/ongoing' exact component={Ongoing}/>
        <Route path='/genshinScreen' exact component={GenshinScreen}/>
        <Route path='/quarantine' exact component={Quarantine}/>
        <Route path='/weatherbox' exact component={Weatherbox}/>
        <Route path='/projectInfo' exact component={ProjectInfo}/>
        {/* <Route path='/testing' exact component={TestingScreen}/> */}
        <Route path='/leglite' exact component={LegLite}/>
        <Route path='/beyond' exact component={BeyondLibrary}/>
        <Route path='/imgProcessing' exact component={ImgProcessing}/>
        <Route path='/fireChart' exact component={FireChart}/>
        <Route path='/flatFoot' exact component={FlatFoot}/>
        <Route path='/adminLogin' exact component={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route path='/' render={() => <div>404</div>}/>
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;
