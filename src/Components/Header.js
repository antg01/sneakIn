import React from 'react';
import { Carousel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

//local import
import styles from './css.module.css';


const head = (
    <Carousel autoplay className="custom-slider" className={styles.Carousel} >
        <img className={styles.imageCarousel}
            src="https://images.unsplash.com/photo-1488704906310-183eeda75d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Img1-unsplash"
        />
        <img className={styles.imageCarousel}
           src="https://images.unsplash.com/photo-1591550936261-4f22e48d1f03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Img2-unsplas"
        />
        <img   className={styles.imageCarousel}
            src="https://images.unsplash.com/photo-1514989771522-458c9b6c035a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Img3-unsplas"
        />
        <img className={styles.imageCarousel}
            src="https://images.unsplash.com/photo-1580977251970-221b2fa3f554?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
            alt="Img4-unsplas"
        />
        <img className={styles.imageCarousel}
            src="https://images.unsplash.com/photo-1581327512036-94637d8cdc2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
            alt="Img5-unsplas"
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
