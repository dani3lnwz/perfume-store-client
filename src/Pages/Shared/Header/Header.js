import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logoo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
  }

    return (
        <>
 <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img height={30} src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#products">Products</Nav.Link>
      <Nav.Link href="home#newArriables">New Arriable</Nav.Link>
      <Nav.Link href="home#topBrands">Top Brands</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>

      {
        user && <>
        <Nav.Link as={Link} to="addproduct">Add</Nav.Link>
        <Nav.Link as={Link} to="manage">Manage</Nav.Link>
        </>
      }
      {
        user ? 
        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
        :
        <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
    );
};

export default Header;