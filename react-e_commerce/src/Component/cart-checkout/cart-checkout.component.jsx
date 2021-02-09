import {cartItemSelector,cartItemTotalSelector} from './cart-checkout.utility';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
const cartCheckout = (props)=>{
    console.log(props)
    return  (

        <>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
            {
                props.cartItem.map(item=>
                    <tr>
                <th scope="row"><img src={item.imageUrl} alt={item.name} style={{width:'120px', height:'120px'}}/></th>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td> X </td>
                </tr>
                    )
            }
            </tbody>
        </table>
        <h4 className="right">Total Price :  {`$ ${props.cartTotalQuantity}`}</h4>
        </>        
    )
}

const mapStateToProps = createStructuredSelector({
    cartItem:cartItemSelector,
    cartTotalQuantity: cartItemTotalSelector
})

export default connect(mapStateToProps,null)(cartCheckout);