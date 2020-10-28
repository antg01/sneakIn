import React from 'react';
import { Carousel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


const instance = (
    <Carousel autoplay className="custom-slider">
        <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
            height="250"
        />
        <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
            height="250"
        />
        <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
            height="250"
        />
        <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
            height="250"
        />
        <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
            height="250"
        />
    </Carousel>
);



class Header extends React.Component {
    render() {
        return(
            <div>
                {instance}
            </div>
        )
    }
}


  
  
export default Header;
