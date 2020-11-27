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
      currentSearch: "",
      // isActive: false,
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
  // setActive = event => {
  //   const newActive = !this.state.isActive;
  //   this.setState({isActive: newActive});
  // };
  filterList = () => {
      const filtered = this.state.sneakers.filter((sneaker) => {
        const textInLowerCase = this.state.currentSearch.toLowerCase()
        const titleInLowerCase = sneaker.title.toLowerCase()
        return titleInLowerCase.includes(textInLowerCase)
      })
      return filtered
  }
  filterShoes = (text) => { 
    this.setState({
     currentSearch: text  
    })
    
  }
  // twoFunc = () => {
  //   this.handleToggle();
  //   this.setFavorite()
  // }
    render () {
      let {sneakers} = this.state
      if (this.state.currentSearch != "" ){
        sneakers = this.filterList()
      }
      return (
        <div className="App">
          <NavbarMenu filterShoes={this.filterShoes} />  
          <Switch>
            <Route 
                exact 
                path='/' 
                render={(props) => ( 
                          <Sneakers 
                            {...props} 
                            sneakers={sneakers}
                            getSneakers={this.getSneakers} 
                            // twoFunc={this.twoFunc}
                            handleToggle={this.handleToggle}
                            isActive={this.state.isActive}
                            setActive={this.setActive}
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
