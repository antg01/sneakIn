import React from 'react';
import './App.css';
import NavbarMenu from './Components/Navbar';
import Sneakers from './Components/Sneakers.js';
import FutureDrops from './Components/FutureDrops.js';
import WishList from './Components/WishList';
import { Switch, Route, Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavbarMenu/>  
      <Switch>
        <Route exact path='/' component={Sneakers}/>
        <Route path='/future-drops' component={FutureDrops}/>
        <Route path='/wish-list' component={WishList}/>
      <l><Link to='/'>Sneakers</Link></l>
      <l><Link to='/future-drops'>FutureDrops</Link></l>
      <l><Link to='/wish-list'>WishList</Link></l>
      </Switch>
    </div> 
  );
}


  export default App;
