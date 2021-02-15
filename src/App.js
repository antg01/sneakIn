import React from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';

//local import
import './App.css';
import SneakerContext from "./Contexts/SneakerContext";
import NavbarMenu from './Components/Navbar';
import Sneakers from './Components/Sneakers.js';
import FutureDrops from './Components/FutureDrops.js';
import WishList from './Components/WishList';


class App extends React.Component { 
    state= {
      sneakers: [],
      favorites: [],
      currentSearch: "",
      isActive: false
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

  componentDidMount() {
    this.getSneakers()
  };

  handleToggle = (sneaker) => {
    this.setState(prevState => ({
      favorites: prevState.favorites.includes(sneaker)
        ? prevState.favorites.filter(favory => favory !== sneaker)
        : [...prevState.favorites, sneaker]
    }));
  };

  setActive = (id) => {
    const newActive = !this.state.isActive;
    this.setState({isActive: newActive});
  };
  
  filterList = () => {
      const filtered = this.state.sneakers.filter((sneaker) => {
        const textInLowerCase = this.state.currentSearch.toLowerCase()
        const titleInLowerCase = sneaker.title.toLowerCase()
        return titleInLowerCase.includes(textInLowerCase)
      })
      return filtered
  };

  filterShoes = (text) => { 
    this.setState({
     currentSearch: text  
    })
  };
 
    render () {
      let {sneakers} = this.state
      if (this.state.currentSearch !== "" ){
        sneakers = this.filterList()
      }
      return (
        <div className="App">
          <SneakerContext.Provider 
              value={{ 
                sneakers: this.state.sneakers,
                // isActive: this.state.isActive,
                // setActive: this.setActive, 
                handleToggle: this.handleToggle, 
                favorites: this.state.favorites
              }}>
          <NavbarMenu filterShoes={this.filterShoes} />  
          <Switch>
            <Route 
                exact 
                path='/' 
                render={(props) => ( <Sneakers />)} 
            />

            <Route path='/future-drops' component={FutureDrops}/>
            <Route 
                path='/wish-list' 
                render={(props) => ( 
                          <WishList {...props} favorites={this.state.favorites} />)}
            />

          <l><Link to='/'>Sneakers</Link></l>
          <l><Link to='/future-drops'>FutureDrops</Link></l>
          <l><Link to='/wish-list'>WishList</Link></l>
          </Switch>
          </SneakerContext.Provider>
        </div> 
      );
    };
}


  export default App;
