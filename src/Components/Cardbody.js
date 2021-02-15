import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import ContentZoom from 'react-content-zoom';

//local import
import styles from './css.module.css';
import SneakerContext from "../Contexts/SneakerContext";
// import { useLocalStorage } from './useLocalStorage';

const Cardbody = ({ sneaker, isFavorite }) => {

  const [show, setShow] = useState(false);
  const { handleToggle, setActive, isActive } = React.useContext(SneakerContext);

  // const useLocalState = (localItem) => {
  //   const [local, setState] = useState(localStorage.getItem(localItem));
  //     const setLocal = (newItem) => {
  //       localStorage.setItem(localItem, newItem);
  //       setState(newItem);
  //     }
  //   return [local, setLocal];
  // }

  // const [active, setActive] = useState(''); setActive(prevstate => !prevstate)

      return (
        <div className={styles.card}>
          <Card style={{ width: '17rem', height: '24rem'}}>
            <Card.Img variant="top" src={sneaker.media.imageUrl} alt={sneaker.shoe} />
            <Card.Body>
              <Card.Title>{sneaker.title}</Card.Title>
              <Card.Text>Price: {sneaker.retailPrice}{' '} $</Card.Text>
            <Button variant="outline-primary" onClick={() => setShow(true)}>See Now</Button>
            <Button className={styles.btnAdd} variant={isFavorite? "danger" : "outline-success"} onClick={(e) =>{ handleToggle(sneaker) }}>{isFavorite? 'Remove' : 'Add'}</Button>
            </Card.Body>
          </Card>

          <Modal
              show={show} 
              onHide={() => setShow(false)}
              style={{opacity:1}}
              size="lg"
              aria-labelledby="example-custom-modal-styling-title"
              centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
              {sneaker.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ContentZoom 
                        zoomPercent={200}
                        largeImageUrl={sneaker.media.smallImageUrl}
                        imageUrl={sneaker.media.smallImageUrl}
                        contentHeight={400}
                        contentWidth={600} />
              <ListGroup>
                <ListGroup.Item><u>Color</u>: {sneaker.colorway}{' '}</ListGroup.Item>
                <ListGroup.Item><u>Year</u>: {sneaker.year}{' '}</ListGroup.Item>
                <ListGroup.Item><u>Gender</u>: {sneaker.gender}{' '}</ListGroup.Item> 
                <ListGroup.Item><u>Release date</u>: {sneaker.releaseDate}{' '}</ListGroup.Item>
                <ListGroup.Item><u>Price</u>: {sneaker.retailPrice}{' '} $</ListGroup.Item>
              </ListGroup>
            </Modal.Body>
            <Button className={styles.btnAdd} onClick={(e) =>{ handleToggle(sneaker) }} variant={isFavorite? "danger" : "success"}>{isFavorite? "Remove from wish list" : "Add to wish list"}</Button>
          </Modal>
          </div>
        
      );
};


export default Cardbody;