import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = ()=>{
    return(
        <div>
            <Navbar collapseOnSelect fixed='top' expand='sm' variant='light'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <NavLink><Link to='/' className='navitem'>HOME</Link></NavLink>
                            <NavLink><Link to='/projects' className='navitem'>PROJECTS</Link></NavLink>
                            <NavLink><Link to='/contact' className='navitem'>CONTACT</Link></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        </div>
    )
}

export default Navigation