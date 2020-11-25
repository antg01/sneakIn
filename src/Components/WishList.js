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
            <h1> wish list </h1>
        <div  className={styles.WishList}>
        
            {favorites.map((sneaker) => (
                <Card style={{ width: '10rem'}}>
                <Card.Img variant="top" src={sneaker.media.imageUrl} alt={sneaker.shoe} />
                <Card.Body>
                <Card.Title>{sneaker.title}</Card.Title>
                <Card.Text>
                Price: {sneaker.retailPrice}{' '} $
            
                </Card.Text>
                {/* <Button variant="outline-primary" onClick={this.showModal}>See Now</Button> */}
                {/* <Button className={styles.btnAdd} variant={this.state.favorite? "success" : "outline-success"} onClick={() =>{ handleToggle(sneaker); this.setFavorite()}}>Add</Button> */}
                </Card.Body>
                </Card>
            ))}
           
        </div>
    </div>
    )
          
}

export default WishList;