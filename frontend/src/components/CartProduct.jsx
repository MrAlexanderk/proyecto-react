import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartProduct = ({ id, name, price, count, img, onAdd, onRemove }) => {
    const { cart, addToCart, removeFromCart, total } = useContext(CartContext);

    const productFoundIndex = cart.findIndex(product => product.id === id);
    if(productFoundIndex >= 0){
        count = cart[productFoundIndex].count;
    }

  return (
    <div className="cart-card">
        <img src={img} className="card-img-left" alt={name} />
        <div className="card-body-cart">
            <h3 className="card-title">Pizza {name}</h3>
            <hr />
            <h4 className="d-flex justify-content-center">${(price * count).toLocaleString("es-CL")}</h4>

            <div className="cart-item-butns py-2">
                <button type="button" onClick={() => removeFromCart({ id, price, name, img })} className={ count < 2 ? "btn btn-danger" : "btn btn-light"}><b>-</b></button>
                <p>{count}</p>
                <button type="button" onClick={() => addToCart({ id, price, name, img })} className="btn btn-light"><b>+</b></button>
            </div>
        </div>
    </div>
  );
};

export default CartProduct;
