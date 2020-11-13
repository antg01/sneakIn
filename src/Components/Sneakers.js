import React from 'react';
import Header from './Header';
import Cardbody from './Cardbody';



class Sneakers extends React.Component {

    componentDidMount() {
      this.props.getSneakers()
    }
    
  render() {
    const { sneakers, handleToggle, setActive, isActive} = this.props; 
    return ( 
      <div>
        <Header />
        <div >
          {sneakers.map((sneaker) => (
            <Cardbody 
            sneaker={sneaker} 
            key={`${sneaker.id}-movie`}
            handleToggle={handleToggle}
           
            setActive={setActive}
            />
          ))}
        </div>
      </div>
    );
  }
}


export default Sneakers;