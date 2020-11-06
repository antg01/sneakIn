import React from 'react';
import './App.css';
import NavbarMenu from './Components/Navbar';
import Sneakers from './Components/Sneakers.js';
import FutureDrops from './Components/FutureDrops.js';
import { Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavbarMenu/>

      <Switch>
        <Route exact path='/' component={Sneakers}/>
        <Route path='/future-drops' component={FutureDrops}/>
      </Switch>
    </div>
  );
}

  export default App;
