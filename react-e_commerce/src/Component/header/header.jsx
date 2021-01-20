import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './header.scss';
import {auth} from '../../firebase/firebase.util';

const Header = ({currentUser})=>{
    return (
        <>
        <Navbar bg="dark" fixed="top" variant="dark">
            <Navbar.Brand>  <Link to="/" className="header-brand">  G@me Frikis </Link> </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link > <Link to="/shop" className="header-content"> Shop </Link> </Nav.Link>
                <Nav.Link> <Link to="/" className="header-content"> Contact </Link> </Nav.Link>
                {
                    currentUser ?
                        <Nav.Link>
                            <Link onClick={()=> auth.signOut()}  className="header-content"> SignOut </Link>
                        </Nav.Link>
                        :
                        <Nav.Link> <Link to="/sign-in" className="header-content"> SignIn </Link> </Nav.Link>
                }

            </Nav>
        </Navbar>
        </>
    )
}

export default Header;