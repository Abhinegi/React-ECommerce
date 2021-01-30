import './cart-item.style.scss';
const CartItem = (props)=>{
    return (<>
        <div className='cart-item'>
            <img src={props.imageUrl} alt='item'/>
            <div className='item-details'>
                <span className='name'>{props.name}</span>
                <span className='name'>{props.quantity} X {`$${props.price}`}</span>
            </div>
        </div>
    </>);
}

export default CartItem;