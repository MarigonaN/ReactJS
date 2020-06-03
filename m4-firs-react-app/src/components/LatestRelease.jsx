import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import bookList from "../data/fantasy.json";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class LatestRelease extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <Container>
               <h2 className="text-center">Lates Release</h2>
               <Row className="row-cols-1 row-cols-md-3 row-cols-lg-5">
                   {bookList.map(book => {
                        return (
                            <Col className="mb-3">
                                <Image src={book.img} thumbnail  style={{height:"18rem", objectFit: "cover"}}/>
                                <div className="w-100 d-flex justify-content-center" >
                                    <span style={{color: "#9e866b"}} className="text-center">{book.title}</span>
                                </div>
                            </Col>

                        )
                   })}
               </Row>

           </Container>
        );
    }
}

export default LatestRelease;