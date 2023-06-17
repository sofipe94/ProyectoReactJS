
const CartItem = ({ name, img, price, quantity, subtotal}) => {

    return (
        <div className="cart-container" >
            <ul>
            <li className="itemCart">
            <picture>
                <img src={img} alt={name} className="image"/>
            </picture>
            <div>{name}</div>
            <div>Precio por unidad: ${price}</div>
            <div>Cantidad: {quantity}</div>
            <div>Subtotal: ${subtotal}</div>
            </li>
            </ul>
            
        </div>
      );
}

export default CartItem


