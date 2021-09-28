import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import UpdateForm from './UpdateForm';




class FavFruit extends React.Component {

constructor(props){
  super(props);
  this.state={
    favArry: [],
    showFlag: false,
    fruitItem: {},
    id:''
  }
}

componentDidMount = () =>{
  const {user} = this.props.auth0;
  const obj = {
    ownerEmail : user.email
  }

}
axios
.get(`http://localhost:3010/getFavFruit`,{params:obj})

.then(result => {
  this.setState({
    favArry: result.data
  })
})
.catch(err => {
  console.log(err);
})
}

handleClose = () =>{
  this.setState({
    showFlag : false,
  })
}


update = (e) => {
  e.preventDefault() ;
  const {user} = this.props.auth0;
  const obj ={
    name : e.target.name.value,
    image : e.target.image.value,
    price : e.target.price.value,
    ownerEmail: user.email
  };
  axios
  .put(`http://localhost:3010/updateFAV/${this.state.id}`,obj)
  .then(result => {
    this.setState({
      favArry: result.data
    })
  })
  .catch(err =>{
    console.log(err);
  })
  this.setState({
    showFlag:false,
  });
  console.log(obj);
}

delete = (id) =>{
  const {user} = this.props.auth0;
  const obj = {
    ownerEmail : user.email
  }
  axios
  .delete(`http://localhost:3010/deleteFAV/${id}`,{params:obj})
  .then (result => {
    this.setState({
      favArry: result.data
    })
  })
  .catch(err => {
    console.log(err);
  })
}



  render() {
    return(
      <>
        <h1>My Favorite Fruits</h1>
        <Row xs={1} md={3} className="g-4">
{this.state.favArry.map((item,idx) =>(
  <Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {item.image} />
  <Card.Body>
    <Card.Title> Title {item.name}</Card.Title>
    <Card.Text>
      {item.price}
    </Card.Text>
    <Button variant="primary" onClick= {()=>
    this.showUpdateForm(item,item._id)}>update</Button>
    <Button variant="primary" onClick= {()=>
    this.delete(item._id)}>delete</Button>
  </Card.Body>
</Card>
</Col>
))}


        </Row>
        {this.state.showFlag&&
        <UpdateForm
        showFlag= {this.state.showFlag}
        handleClose={this.handleClose}
        fruitItem={this.state.fruitItem}
        update={this.update}
        />
      }
      </>
    )
  }
}

export default withAuth0(FavFruit); 
