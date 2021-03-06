import React from "react";
import './Cart.css'
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart(){
    const {cartList, vaciarCart, eliminarItem, totalPrice} = useCartContext()
    console.log(cartList)
    if (cartList.length === 0) {
        return (
            <div>
                <h3>No tenes items agregados</h3>
                <Link to='/'><button>Ver productos</button></Link>
            </div>
        )
    }else{
return (
        <div className="cart">
            <h2 className='title-cont'>Detalle de tu compra</h2>
            {cartList.map (item =>
            <div className="item-cart" key={item.id}>
                <li> Producto: {item.title} Precio: $ {item.price} Cantidad: {item.cantidad}</li>
                <button className="btn-cart" onClick={()=> eliminarItem(item.id)}>Eliminar</button>
            </div>
            )}
            <h4>Total de tu compra: $ {totalPrice()}</h4>
            <button onClick={vaciarCart}>Vaciar Carrito</button>
            <Link to='/form'>
                <button>Finalizar Compra</button>
            </Link>
        </div>
        )
    }
}

export default Cart