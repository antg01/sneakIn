import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css.module.css';

function Cardbody({ sneakers }) {
  return(
    <div className={styles.card}>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={sneakers.media.imageUrl} alt={sneakers.shoe} />
      <Card.Body>
    <Card.Title>{sneakers.title}</Card.Title>
      <Card.Text>
      Price: {sneakers.retailPrice}{' '} $
      
      </Card.Text>
      <Button variant="primary">See Now</Button>
      </Card.Body>
      </Card>
    </div>

  )
}

// class Cardbody extends React.Component {
//     render() {
//         return (
//           <Card style={{ width: '18rem'}}>
//           <Card.Img variant="top" src="https://static.highsnobiety.com/thumbor/asMBLuQVrQ3ie14S8z73Iy0hG9s=/1200x720/static.highsnobiety.com/wp-content/uploads/2020/07/22104235/off-white-jordan-4-sail-feat1.jpg" />
//           <Card.Body>
//             <Card.Title>Off White x Nike Air Jordan 4 “Sail”</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the bulk of
//               the card's content.
//             </Card.Text>
//             <Button variant="primary">See Now</Button>
//           </Card.Body>
//           </Card>
//         )
//     }
// }

export default Cardbody;