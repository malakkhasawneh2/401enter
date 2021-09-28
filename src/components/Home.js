import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import FruitItem from './FruitItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFruit: [],
      dataRedy: false
    }
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:3010/getFruit`)
      .then(result => {
        this.setState({
          allFruit: result.data,
        })
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <Row xs={1} md={3} className="g-4">

          {this.state.allFruit.map((item,idx) =>(
            <Col>
              <FruitItem
                item={item}/>
            </Col>
          ))}
          
        </Row>
      </>
    )
  }
}

export default Home;
