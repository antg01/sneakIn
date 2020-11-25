import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import styles from './css.module.css';


const cardstyle = {
    border: "3px"

}
const WishList = ({ favorites }) => {
    return(
        <div>
        
            {favorites.map((sneaker) => (
                <a className={styles.WishList} href={`https://stockx.com/search?s=${sneaker.title}`} target="_blank" rel="noreferrer noopener">
                <Card>
                <Card.Img variant="top" src={sneaker.media.imageUrl} alt={sneaker.shoe} />
                <Card.Body>
                <Card.Title>{sneaker.title}</Card.Title>
                <Card.Text>
                Price: {sneaker.retailPrice}{' '} $
            
                </Card.Text>
                </Card.Body>
                </Card>
                </a>
            ))}
           
        </div>
    
    )
          
}

export default WishList;