import React, {Component} from 'react';
import Badge from "react-bootstrap/Badge";
import {Container} from "react-bootstrap";

class MyBadge extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Badge className="ml-5" >
                    <h1 className="display-3 ">{this.props.text}</h1>
            </Badge>
            </Container>

        );
    }
}

export default MyBadge;