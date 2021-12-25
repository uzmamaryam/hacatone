import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import About from './About';
import Home from './Home';
import Action from './Action';
import Another from './Another';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

  

const Website = () => {
    return (
        <Router>       <div>

        
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as = {Link}  to ={'/'} >Home</Nav.Link>

        <Nav.Link as = {Link}  to ={'/About'} >About</Nav.Link>
       
        { <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item as ={Link} to={'/Action'} >Action</NavDropdown.Item>
          <NavDropdown.Item as= {Link}  to ={'/Another'}>Another </NavDropdown.Item>
          <NavDropdown.Divider />
          {/* <NavDropdown.Item href="#action5">Something else here </NavDropdown.Item> */}
        </NavDropdown> }
         <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>

        <Routes>
          <Route path="/"  element ={<Home/>} />
          <Route path="/About"     element ={< About/>}  />
         < Route path="/Action"  element ={<Action/>} />
          <Route path="/Another"     element ={< Another/>}  />
          
        </Routes>
        <div>


    
</div>

        </Router> 




    )
}

export default Website