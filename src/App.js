import './App.css';
import NavbarMenu from './Components/Navbar';
import Header from './Components/Header';
import Cardbody from './Components/Cardbody';
import Sneakers from './Components/Sneakers.js'
import FutureDrops from './Components/FutureDrops.js'
import { Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavbarMenu/>
      <l><Link to='/'>Sneakers</Link></l>
      <l><Link to='/FuturDrops'>FutureDrops</Link></l>
      <Switch>
        <Route exact path='/' component={Sneakers}/>
        <Route path='/FutureDrops' component={FutureDrops}/>
      </Switch>
      
    </div>
  );
}

export default App;
