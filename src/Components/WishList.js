import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import styles from './css.module.css';


class WishList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        };
    }

    // this.setState(prevState => ({
    //     favorites: prevState.favorites.includes(movie)
    //       ? prevState.favorites.filter(favory => favory !== movie)
    //       : [...prevState.favorites, movie]
    //   }));

    render (){
        
        return (
            <div>
                
    
            </div>
        )

    }
} 

export default WishList;