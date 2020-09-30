import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import bookList from "../data/horror.json";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Comment from "./Comment";

class LatestRelease extends Component {
    constructor(props) {
        super(props);
    }
    state= {
        books:bookList,
        selectedBook: null,
        comments: [],
        showComments: false
    }
    handleComments = async (book) => {
        let response = await fetch(`https://striveschool.herokuapp.com/api/comments/${book.asin}`, {
            "method": "GET",
            "headers": {
                "Authorization": "Basic " + btoa('user19:Hxx8R4wZfCANamrj')}

        })
        let comments = await response.json()

        this.setState({
            selectedBook:book,
            comments:comments,
            showComments:true
        })
        console.log(this.state.selectedBook, this.state.comments)

    }

    render() {
        return (
           <Container>
               <h2 className="text-center">Lates Release</h2>
                <h4 className="text-center">Click on the book you want to add a comment</h4>
                <p className="text-center">The form will appear at the end of the page</p>
               <Row>
          
               <Row className="row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-5" id="books">
                   {bookList.map(book => {
                        return (
                            <Col className="mb-3">
                                <Image src={book.img} thumbnail style={{height:"18rem", objectFit: "cover",}}onClick={()=>this.handleComments(book)}/>
                                <div className="w-100 d-flex justify-content-center" >
                                    <span style={{color: "#9e866b"}} className="text-center">{book.title}</span>
                                </div>
                            </Col>

                        )
                   })}
               </Row>
              
         
             
              
                   </Row>
                   <Col lg={12}>
                       
                       {this.state.showComments && <Comment book={this.state.selectedBook} comments={this.state.comments} /> }
                   </Col>
           </Container>
           
        );
    }
}

export default LatestRelease;