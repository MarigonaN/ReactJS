import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Col, Image, Row } from "react-bootstrap";



class Footer extends Component {
  render() {
    return (
      <Container className="footer" fluid style={{ backgroundColor: "#92afde" }}>
        <Container>
          <Row className="row-cols-1 row-cols-lg-2 my-4 justify-content-start">
          
            <Col>
              <ul>
                <li className="pb-2">
                  <a href="#">About</a>
                </li>
                <li className="pb-2">
                  <a href="#">Contact</a>
                </li>
                <li className="pb-2">
                  <a href="#">Terms of use</a>
                </li>
                <li className="pb-2">
                  <a href="#">Bookshop for authors</a>
                </li>
                <li className="pb-2">
                  <a className="pr-2" href="#">
                   
                  </a>
                  <a className="pr-2" href={"#"}>
                   
                  </a>
                  <a className="pr-2" href={"#"}>
                   
                  </a>
                </li>
              </ul>
            </Col>
           
          </Row>
          <Col className="d-flex logo align-items-center justify-content-center">
              <Image src="https://www.pngfind.com/pngs/m/130-1300269_books-on-shelf-png-books-on-shelf-clipart.png" />
              
            </Col>
        </Container>
      </Container>
    );
  }
}

export default Footer;