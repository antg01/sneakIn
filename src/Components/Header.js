import React from 'react';
import { Carousel } from 'rsuite';
import styles from './css.module.css';
import 'rsuite/dist/styles/rsuite-default.css';



const head = (
    <Carousel autoplay className="custom-slider" className={styles.Carousel} >
        <img className={styles.imageCarousel}
            src="https://images.unsplash.com/photo-1488704906310-183eeda75d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            // src ="https://stockx-360.imgix.net//adidas-Yeezy-Boost-350-V2-Carbon/Images/adidas-Yeezy-Boost-350-V2-Carbon/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1603481985&w=1000"
            alt="shoes1"
        />
        <img className={styles.imageCarousel}
           src="https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
             // src="https://stockx-360.imgix.net//Air-Jordan-1-Mid-Chicago-Toe/Images/Air-Jordan-1-Mid-Chicago-Toe/Lv2/img02.jpg?auto=format,compress&q=90&updated_at=1603481985&w=1000"
             alt="shoes2"
        />
        <img   className={styles.imageCarousel}
            src="https://images.unsplash.com/photo-1514989771522-458c9b6c035a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
             // src="https://stockx-360.imgix.net//Nike-Air-Force-1-Low-Supreme-Box-Logo-White/Images/Nike-Air-Force-1-Low-Supreme-Box-Logo-White/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1603481985&w=1000"
             alt="shoes3"
        />
        <img className={styles.imageCarousel}
            src="https://images.unsplash.com/photo-1578116922645-3976907a7671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
             // src="https://stockx-360.imgix.net//Nike-Air-Rubber-Dunk-Off-White-UNC/Images/Nike-Air-Rubber-Dunk-Off-White-UNC/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1603756119&w=1000"
             alt="shoes4"
        />
        <img className={styles.imageCarousel}
            src="https://images.unsplash.com/photo-1581327512036-94637d8cdc2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
             // src="https://stockx-360.imgix.net//Air-Jordan-13-Retro-Flint-2020/Images/Air-Jordan-13-Retro-Flint-2020/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1603481985&w=1000"
             alt="shoes5"
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
