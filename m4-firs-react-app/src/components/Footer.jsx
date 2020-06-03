import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import { Col, Row, i} from "react-bootstrap";



class Footer extends Component {
  render() {
    return (
      <Container className="footer" fluid style={{ backgroundColor: "white", height: "250px", }}>
        <Container>
          <Row className="row-cols-1 row-cols-lg-2 my-4 ">
          
            <Col className="justify-content-start">
              <img src="https://i.pinimg.com/564x/18/18/88/18188820e5da19a3908aeb18af5246b5.jpg"></img>
          
            </Col>
            <Col className="justify-content-start mt-5">
            <h3>Book Store</h3>
            <p>Street: 120 Wentworth St. Hattiesburg, MS 39401</p>
            <p>Tel: 202-555-0161</p>
          <a href="#" >
           <i className="fa fa-facebook fa-2x" ></i>
           <i className="fa fa-github fa-2x ml-5"></i>
           <i className="fa fa-linkedin fa-2x ml-5"></i>
           <i className="fa fa-heart ml-5"></i>
          </a>
         
         
      
           
            </Col>
           
            
           
          </Row>
         
        </Container>
      </Container>
    );
  }
}

export default Footer;