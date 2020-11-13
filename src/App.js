import React from 'react';
import './App.css';
import axios from 'axios';
import NavbarMenu from './Components/Navbar';
import Sneakers from './Components/Sneakers.js';
import FutureDrops from './Components/FutureDrops.js';
import WishList from './Components/WishList';
import { Switch, Route, Link} from 'react-router-dom';


class App extends React.Component { 
    state= {
      sneakers: [],
      favorites: [],
      favorite: false,
  }; 
    getSneakers = () => {
   
      axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=100')
     
        .then(response => response.data)
      
        .then(data => {

          let filteredData = data.results.filter(item => item.media.imageUrl !== null 
            && !item.media.imageUrl.includes("Default.jpg") 
            && !item.title.includes("(GS)")
            && !item.title.includes("(PS)")
            && !item.title.includes("(TD)"))
         
        this.setState({
          sneakers: filteredData
        });
    });
  };
  handleToggle = (sneaker) => {
    this.setState(prevState => ({
      favorites: prevState.favorites.includes(sneaker)
        ? prevState.favorites.filter(favory => favory !== sneaker)
        : [...prevState.favorites, sneaker]
    }));
  };
  setFavorite = event => {
    const newfavorite = !this.state.favorite;
    this.setState({favorite: newfavorite});
  };
  // twoFunc = () => {
  //   this.handleToggle();
  //   this.setFavorite()
  // }
    render () {
      return (
        <div className="App">
          <NavbarMenu/>  
          <Switch>
            <Route 
                exact 
                path='/' 
                render={(props) => ( 
                          <Sneakers 
                            {...props} 
                            sneakers={this.state.sneakers}
                            getSneakers={this.getSneakers} 
                            // twoFunc={this.twoFunc}
                            handleToggle={this.handleToggle}
                            favorite={this.state.favorite}
                            setFavorite={this.setFavorite}
                          />)} 
            />

            <Route path='/future-drops' component={FutureDrops}/>
            <Route 
                path='/wish-list' 
                render={(props) => ( 
                          <WishList 
                            {...props}
                            favorites={this.state.favorites}
                          />)}
            />

          <l><Link to='/'>Sneakers</Link></l>
          <l><Link to='/future-drops'>FutureDrops</Link></l>
          <l><Link to='/wish-list'>WishList</Link></l>
          </Switch>
        </div> 
      );
    }

}


  export default App;
