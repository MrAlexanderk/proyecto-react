import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CardPizza = ({ id, name, price, ingredients, img }) => {
    const { cart, addToCart, removeFromCart, total } = useContext(CartContext);
    const indexFound = cart.findIndex(product => product.id === id);
    let addedToCart = indexFound >= 0;
    let count = cart[indexFound]?.count || 0;

    return (
        <div className="card col-12 col-sm-6 col-lg-3 mb-3">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h3 className="card-title">Pizza {name}</h3>
                <hr />
                <h5 className="d-flex justify-content-start">🍕 Ingredientes:</h5>
                <ul>
                    {ingredients.map((ingredient) => <li key={ingredient}> {ingredient}</li>)}
                </ul>
                <hr />
                <h4 className="d-flex justify-content-center">Precio: ${price.toLocaleString("es-CL")}</h4>
                <div className="d-flex justify-content-between py-2">
                    <button className="btn btn-success" onClick={() => addToCart({ id, price, name, img })} >{addedToCart ? `Unidades en carrito: ${count}` : "Añadir al carrito"}</button>
                    <button className="btn btn-primary">Ver más</button>
                </div>
            </div>
        </div>
    );
}

export default CardPizza;
