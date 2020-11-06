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
<<<<<<< HEAD
      <l><Link to='/'>Sneakers</Link></l>
      <l><Link to='/futuredrops'>FutureDrops</Link></l>
      <Switch>
        <Route exact path='/' component={Sneakers}/>
        <Route path='/futuredrops' component={FutureDrops}/>
=======
      <l><Link to='/'>sneakers</Link></l>
      <l><Link to='/future-drops'>FutureDrops</Link></l>
      <Switch>
        <Route exact path='/' component={Sneakers}/>
        <Route path='/future-drops' component={FutureDrops}/>
>>>>>>> bc6a6031b3d83142cac9cd8f3a521ccaeebe8170
      </Switch>
    </div> 
  );
}

  export default App;
