import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

//local import
import styles from './css.module.css';


const WishList = ({ favorites }) => {
    return(
        <div>
        
            {favorites.map((sneaker) => (
                <a className={styles.WishList} href={`https://stockx.com/search?s=${sneaker.title}`} target="_blank" rel="noreferrer noopener">
                <Card style={{ width: '14rem', height: '20rem'}}>
                <Card.Img variant="top" src={sneaker.media.imageUrl} alt={sneaker.shoe} />
                <Card.Body>
                <Card.Title>{sneaker.title}</Card.Title>
                <Card.Text className={styles.textWishList}>
                Price: {sneaker.retailPrice}{' '} $

                <small className={styles.smallTextWishList}>See more stock market info</small>
            
                </Card.Text>
                </Card.Body>
                </Card>
                </a>
            ))}
           
        </div>
    );  
}

export default WishList;