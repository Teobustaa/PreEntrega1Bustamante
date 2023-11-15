import "bulma/css/bulma.css"
import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img style={{width: 50, height: 50}} src={cart} alt= "cart-widget"/>
            5
        </div>
    )
}

export default CartWidget