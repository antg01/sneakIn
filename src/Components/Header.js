import React from 'react';
import { Carousel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


const head = (
    <Carousel autoplay className="custom-slider">
        <img
            src="https://images.unsplash.com/photo-1533680937690-d59ab2543468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            height="250"
        />
        <img
            src="https://images.unsplash.com/photo-1521774971864-62e842046145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            height="250"
        />
        <img
            src="https://images.unsplash.com/photo-1473010350295-2c82192ebd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            height="250"
        />
        <img
            src="https://images.unsplash.com/photo-1542562566-c1f9c7d7e737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            height="250"
        />
        <img
            src="https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            height="250"
        />
    </Carousel>
);



class Header extends React.Component {
    render() {
        return(
            <div>
                {head}
            </div>
        )
    }
}


  
  
export default Header;
