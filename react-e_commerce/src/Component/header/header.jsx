import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './header.scss';
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { hiddenDropdownSelector} from './header.utility';
import {createStructuredSelector} from 'reselect';
import {userSelector} from '../../App.utility';

const Header = ({currentUser,hideCartDropDown})=>{
    return (
        <>
        <Navbar bg="dark" fixed="top" variant="dark">
            <Navbar.Brand>  <Link to="/" className="header-brand">  G@me Frikis </Link> </Navbar.Brand>
            <Nav className="ml-auto">
              <CartIcon/>
              <Link to="/shop" className="header-content"> Shop </Link> 
               <Link to="/" className="header-content"> Contact </Link> 
                {
                    currentUser ?
                        <Link to="/" onClick={()=> auth.signOut()}  className="header-content"> SignOut </Link>
                        :
                        <Link to="/sign-in" className="header-content"> SignIn </Link> 
                }

            </Nav>
        </Navbar>
        {
        hideCartDropDown?null:
        <CartDropDown/>
        }
        </>
    )
}

const mapStateToProps = createStructuredSelector(
{
        currentUser : userSelector,
        hideCartDropDown: hiddenDropdownSelector
}
)
export default connect(mapStateToProps)(Header);