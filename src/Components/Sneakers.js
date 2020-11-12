import React from 'react';
import Header from './Header';
import axios from 'axios';
import Cardbody from './Cardbody';
import styles from './css.module.css';


class Sneakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: null
    };
    this.getSneakers = this.getSneakers.bind(this);
  }
    componentDidMount() {
      this.getSneakers()
    }
    getSneakers() {
   
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
    }
  render() {
    return ( 
      <div>
        <Header />
        <div>
          {this.state.sneakers && this.state.sneakers.map((sneakersData) => (
            <Cardbody sneakers={sneakersData} />
          ))}
        </div>
      </div>
    );
  }
}


export default Sneakers;