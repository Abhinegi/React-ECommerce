import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = (props)=>{
    return (
        <>
        <Navbar bg="dark" fixed="top" variant="dark">
            <Navbar.Brand>  <Link to="/" className="header-brand">  G@me Frikis </Link> </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link > <Link to="/" className="header-content"> Shop </Link> </Nav.Link>
                <Nav.Link> <Link to="/" className="header-content"> Contact </Link> </Nav.Link>
            </Nav>
        
        </Navbar>
        </>
    )
}

export default Header;