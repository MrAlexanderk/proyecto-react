import { useState, useContext } from "react";
import CartProduct from "../components/CartProduct";
import { pizzaCart } from '../assets/pizzas';
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, addToCart, removeFromCart, total } = useContext(CartContext);

    return (
        <div className="cart-page d-flex justify-content-center">
            <div className="cart">
                <h3>Detalles del pedido:</h3>
                <div className="cart-gallery">
                    {cart.map((pizza) => (
                        <CartProduct
                            key={pizza.id}
                            id={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            count={pizza.count}
                            img={pizza.img}
                            onAdd={() => addToCart(pizza)}
                            onRemove={() => removeFromCart(pizza)}
                        />
                    ))}
                </div>

                <h2>Total: ${total.toLocaleString("es-CL")}</h2>
                <button className="btn btn-success">Pagar</button>
            </div>
        </div>
    );
};

export default Cart;
