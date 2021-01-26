
import {ReactComponent as ShoppingImage} from '../../images/shopping-bag.svg';
import {connect } from 'react-redux';
import './cart-icon.style.scss';
import { cartHidden} from '../../redux/cart.action';
export const CartIcon = (props) =>{
    return (
        <>
            <div className="cart-icon" onClick={()=>props.setCartToggle()}>
                <ShoppingImage className='shopping-icon'></ShoppingImage>
                <span className="item-count"> 0 </span>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch =>{
    return {    
        setCartToggle: ()=>dispatch(cartHidden())
    }
}
export default connect(null,mapDispatchToProps)(CartIcon);