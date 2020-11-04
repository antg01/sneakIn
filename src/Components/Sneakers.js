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
      // Send the request
      axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=32')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
          this.setState({
            sneakers: data.results,
          });
          console.log(data)
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