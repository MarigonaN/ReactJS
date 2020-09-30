import React, {Component} from 'react';
import Badge from "react-bootstrap/Badge";
import {Container} from "react-bootstrap";

const mystyle = {
    color: "black",
    width: "950px",
    fontSize: "20px",
    padding: "30px",
    fontFamily: "Arial"
  }
class MyBadge extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Badge className="ml-5" >
                <Badge variant={this.props.variant} style={mystyle}>{this.props.text} </Badge>
            </Badge>
            </Container>

        );
    }
}

export default MyBadge;