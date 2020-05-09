import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles.css';

class NavbarComponent extends React.Component{
    render(){
        return(
            <Navbar expand="lg" fixed= "top"className="custom-nav" >
                <Navbar.Brand className="nav-brand" href="#home">Gisele Ribeiro</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ width: "100%" }} className="mr-auto justify-content-end">
                    <Nav.Link className="item-nav" ><Link className="item" to='/'>Home</Link></Nav.Link>
                    <Nav.Link className="item-nav" ><Link className="item" to='/projects'>Projetos</Link></Nav.Link>
                    <Nav.Link className="item-nav" ><Link className="item" to='/contact'>Contatos</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
</Navbar>
        )
    }
}
export default NavbarComponent;