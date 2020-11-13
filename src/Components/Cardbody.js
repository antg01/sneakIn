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
          favorite: false,
          show : false,
      };
    }
      showModal = () => {
        this.setState({ show: true });
      };
      hideModal = () => {
        this.setState({ show: false });
      };
      setFavorite = event => {
          const newfavorite = !this.state.favorite;
          this.setState({favorite: newfavorite});
      };
      
    
    render (){
      const { sneakers } = this.props;

      return (
        
        <div className={styles.card}>
          <Card style={{ width: '17rem'}}>
          <Card.Img variant="top" src={sneakers.media.imageUrl} alt={sneakers.shoe} />
          <Card.Body>
        <Card.Title>{sneakers.title}</Card.Title>
          <Card.Text>
          Price: {sneakers.retailPrice}{' '} $
          
          </Card.Text>
          <Button variant="outline-primary" onClick={this.showModal}>See Now</Button>
          <Button className={styles.btnAdd} variant={this.state.favorite? "success" : "outline-success"} onClick={this.setFavorite}>Add</Button>
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
              {sneakers.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={sneakers.media.smallImageUrl} alt="" />
              <ListGroup>
                <ListGroup.Item>Color: {sneakers.colorway}{' '}</ListGroup.Item>
                <ListGroup.Item>Year: {sneakers.year}{' '}</ListGroup.Item>
                <ListGroup.Item>Gender: {sneakers.gender}{' '}</ListGroup.Item> 
                <ListGroup.Item>Release date: {sneakers.releaseDate}{' '}</ListGroup.Item>
                <ListGroup.Item>Price: {sneakers.retailPrice}{' '} $</ListGroup.Item>
              </ListGroup>
            </Modal.Body>
            <Button className={styles.btnAdd} variant="success">Add to wish list</Button>
          </Modal>
          </div>
        
      );
    };
}


export default Cardbody;