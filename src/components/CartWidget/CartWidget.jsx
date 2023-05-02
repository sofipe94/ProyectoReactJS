import cart from './assets/cart.png'

const CartWidget = () => {
    return(
        <div className="carrito">
            <img src={cart} alt="cart-widget"></img>
            0
        </div>
    )
}

export default CartWidget