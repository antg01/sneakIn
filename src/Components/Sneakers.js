import React from 'react';
import Header from './Header';
import Cardbody from './Cardbody';



class Sneakers extends React.Component {

    componentDidMount() {
      this.props.getSneakers()
    }
    
  render() {
    const { sneakers, handleToggle, favorite, setFavorite, twoFunc } = this.props; 
    return ( 
      <div>
        <Header />
        <div >
          {sneakers.map((sneaker) => (
            <Cardbody 
            sneaker={sneaker} 
            key={`${sneaker.id}-movie`}
            // twoFunc={twoFunc}
            handleToggle={handleToggle}
            // favorite={favorite}
            setFavorite={setFavorite}
            />
          ))}
        </div>
      </div>
    );
  }
}


export default Sneakers;