import React from 'react'
import {Navbar, FormControl, Form, Button} from 'react-bootstrap'
 const NavBar = (prop) => {
     return (
        <Navbar bg="light">
        <Navbar.Brand href="#home">{prop.title}</Navbar.Brand>
        <Form inline className="ml-5">
    <FormControl type="text" placeholder="Search" className=" mr-sm-2 ml-5" style={{width: "550px"}} />
    <Button type="submit">Search</Button>
  </Form>
      </Navbar>
     )
 }

 export default NavBar;