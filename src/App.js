import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './screens/Homepage';
import NavBar from "./components/NavBar";
import Completed from "./screens/Completed";
import Ongoing from "./screens/Ongoing";
import ProjectInfo from "./singlescreens/ProjectInfo";
import { Route, Switch, useLocation} from "react-router-dom";
import GenshinScreen from './screens/GenshinScreen';
import Quarantine from './singlescreens/Quarantine';
import Entertainment from './screens/Entertainment';
import Weatherbox from './singlescreens/Weatherbox';
import LegLite from './singlescreens/LegLite';
import BeyondLibrary from './singlescreens/BeyondLibrary';
import ImgProcessing from './singlescreens/ImgProcessing';
import FireChart from './singlescreens/FireChart';
import FlatFoot from './singlescreens/FlatFoot';
import Login from './screens/Login'
import Profile from './singlescreens/Profile';
import { AnimatePresence } from 'framer-motion';
import { Container } from 'react-bootstrap';

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <div>
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <AnimatePresence exitBeforeEnter initial={true}>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={() => <Homepage loggedIn={loggedIn}/>}/>
          <Route path='/completed' exact component={Completed}/>
          <Route path ='/entertainment' exact component={() => <Entertainment loggedIn={loggedIn}/>}/>
          <Route path='/ongoing' exact component={Ongoing}/>
          <Route path='/genshinScreen' exact component={GenshinScreen}/>
          <Route path='/quarantine' exact component={Quarantine}/>
          <Route path='/weatherbox' exact component={Weatherbox}/>
          <Route path='/projectInfo' exact component={ProjectInfo}/>
          <Route path='/leglite' exact component={LegLite}/>
          <Route path='/beyond' exact component={BeyondLibrary}/>
          <Route path='/imgProcessing' exact component={ImgProcessing}/>
          <Route path='/fireChart' exact component={FireChart}/>
          <Route path='/flatFoot' exact component={FlatFoot}/>
          <Route path='/profile' exact component={Profile}/>
          <Route path='/adminLogin' exact component={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
          <Route path='/' render={() => <Container> You just wandered into an unmade page. Here's a picture of my dog.
            <img style={{width: "100%", height: "auto"}}
            src="https://firebasestorage.googleapis.com/v0/b/genshin-abyss-progress.appspot.com/o/Carousel%2FrandomToken.jpg?alt=media&token=df0342f3-ca8e-4ab2-86ba-078702c9eca6" alt="first iamge"/>
          </Container>}/>
      </Switch>
      </AnimatePresence>
      </div>
  );
  
}

export default App;
