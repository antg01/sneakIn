import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import styles from './css.module.css';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup'


function Cardbody({ sneakers }) {
  const [show, setShow] = React.useState(false);

  return (
    <div className={styles.card}>
      <Card style={{ width: '17rem'}}>
      <Card.Img variant="top" src={sneakers.media.imageUrl} alt={sneakers.shoe} />
      <Card.Body>
    <Card.Title>{sneakers.title}</Card.Title>
      <Card.Text>
      Price: {sneakers.retailPrice}{' '} $
      
      </Card.Text>
      <Button variant="primary" onClick={() => setShow(true)}>See Now</Button>
      </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        style={{opacity:1}}
        size="lg"
        // dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          {sneakers.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={sneakers.media.smallImageUrl} />
          <ListGroup>
            <ListGroup.Item>Color: {sneakers.colorway}{' '}</ListGroup.Item>
            <ListGroup.Item>Year: {sneakers.year}{' '}</ListGroup.Item>
            <ListGroup.Item>Gender: {sneakers.gender}{' '}</ListGroup.Item>
            <ListGroup.Item>Release date: {sneakers.releaseDate}{' '}</ListGroup.Item>
            <ListGroup.Item>Price: {sneakers.retailPrice}{' '} $</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
      </div>
  );
}


export default Cardbody;