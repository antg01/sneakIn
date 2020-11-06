import React from 'react';
import axios from 'axios';
// import NavbarMenu from './Navbar';
import Header from './Header';
import Cardbody from './Cardbody';


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

          let filteredData = data.results.filter(item => item.media.imageUrl !== null)

          // let filteredDataIncludes = data.results.filter(item => item.media.imageUrl.includes("default"))

          this.setState({
            sneakers: filteredData
          });
      });
    }
  render() {
    return (
      <div className='App'>
        {/* <NavbarMenu /> */}
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