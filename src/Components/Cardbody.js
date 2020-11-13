import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import styles from './css.module.css';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup'

class Cardbody extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          show : false,
          isActive: false,
      };
    }
      showModal = () => {
        this.setState({ show: true });
      };
      hideModal = () => {
        this.setState({ show: false });
      };
      setActive = event => {
        const newActive = !this.state.isActive;
        this.setState({isActive: newActive});
      };

      
    
    render (){
      const { sneaker, handleToggle, isActive, setActive } = this.props;

      return (
        
        <div className={styles.card}>
          <Card style={{ width: '17rem'}}>
          <Card.Img variant="top" src={sneaker.media.imageUrl} alt={sneaker.shoe} />
          <Card.Body>
        <Card.Title>{sneaker.title}</Card.Title>
          <Card.Text>
          Price: {sneaker.retailPrice}{' '} $
          
          </Card.Text>
          <Button variant="outline-primary" onClick={this.showModal}>See Now</Button>
          <Button className={styles.btnAdd} variant={this.state.isActive? "success" : "outline-success"} onClick={() =>{ handleToggle(sneaker); this.setActive()}}>Add</Button>
          </Card.Body>
          </Card>


          <Modal
            show={this.state.show}
            onHide={this.hideModal}
            style={{opacity:1}}
            size="lg"
            // dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
              {sneaker.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={sneaker.media.smallImageUrl} alt="" />
              <ListGroup>
                <ListGroup.Item>Color: {sneaker.colorway}{' '}</ListGroup.Item>
                <ListGroup.Item>Year: {sneaker.year}{' '}</ListGroup.Item>
                <ListGroup.Item>Gender: {sneaker.gender}{' '}</ListGroup.Item> 
                <ListGroup.Item>Release date: {sneaker.releaseDate}{' '}</ListGroup.Item>
                <ListGroup.Item>Price: {sneaker.retailPrice}{' '} $</ListGroup.Item>
              </ListGroup>
            </Modal.Body>
            <Button className={styles.btnAdd} onClick={() => handleToggle(sneaker)} variant="success">Add to wish list</Button>
          </Modal>
          </div>
        
      );
    };
}


export default Cardbody;