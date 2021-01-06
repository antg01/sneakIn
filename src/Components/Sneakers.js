import React from 'react'; 

//local import 
import SneakerContext from "../Contexts/SneakerContext";
import Header from './Header';
import Cardbody from './Cardbody';


const Sneakers = () => {
    
  const { sneakers } = React.useContext(SneakerContext);

    return ( 
      <div>
        <Header />
        <div >
          {sneakers.map((sneaker) => (
            <Cardbody 
            sneaker={sneaker} 
            key={`sneaker - ${sneaker.id}`}
            />
          ))}
        </div>
      </div>
    );
}

export default Sneakers;