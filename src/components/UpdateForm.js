import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UpdateForm extends React.Component{
    render(){
        return (

            <>
             <Modal show={this.props.showFlag} onHide={this.props.handleClose}>

             <Modal.Header closeButton>
          <Modal.Title>update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form onSubmit = {(e) => this.props.update(e)} >
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" name="name" defaultValue = {this.props.fruitItem.name} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>img</Form.Label>
    <Form.Control type="text" name="image" defaultValue = {this.props.fruitItem.imge} />
    </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>price</Form.Label>
    <Form.Control type="number" name="price" defaultValue = {this.props.fruitItem.price} />
    </Form.Group>




  <Button variant="primary" type="submit">
    save
  </Button>
</Form>        
        
<Modal.Body>    
          </Modal>



            </>
        )
    }

}

export default UpdateForm;
