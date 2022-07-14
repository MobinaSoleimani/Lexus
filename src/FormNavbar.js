import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Form,FormControl,Button,Container} from "react-bootstrap";
import search from "./images/search.png";
import logo from "./images/logo.png";

const FormNavbar = () => {
    return (
        <>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
     <img src={logo} alt='logo' className='w-50'/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
           <Nav.Link href="#" className='text-dark'>SEDAN</Nav.Link>
           <Nav.Link href="#" className='text-dark'>SUV</Nav.Link>
           <Nav.Link href="#" className='text-dark'>COUPE</Nav.Link>
           <Nav.Link href="#" className='text-dark'>HYBRID & ELECTRIC</Nav.Link>
           <Nav.Link href="#" className='text-dark'>PERFORMANCE</Nav.Link>
           <Nav.Link href="#" className='text-dark'>FUTURE</Nav.Link>
           <Nav.Link href="#" className='text-dark'>Owners</Nav.Link>
           <Nav.Link href="#" className='text-dark'>L/Certified</Nav.Link>
           <Nav.Link href="#" className='text-dark'>Find A Dealer</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search..."
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-seconde"className='ml-0 w-25'>
        <img src={search} alt='search'className='w-75 h-100'/>
        </Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>

    );
};

export default FormNavbar;