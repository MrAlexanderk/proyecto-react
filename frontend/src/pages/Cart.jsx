import { useState } from "react";
import CartProduct from "../components/CartProduct";
import { pizzaCart } from '../assets/pizzas';

const Cart = () => {
    const [totales, setTotales] = useState(pizzaCart);

    const addCount = (id) => {
      setTotales(prevTotales =>
        prevTotales.map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        )
      );
    };
  
    const removeCount = (id) => {
      setTotales(prevTotales =>
        prevTotales.map((pizza) =>
          pizza.id === id && pizza.count > 0 ? { ...pizza, count: pizza.count - 1 } : pizza
        )
      );
    };
  
    const removeProduct = (id) => {
      setTotales(prevTotales =>
        prevTotales.filter((pizza) => pizza.id !== id)
      );
    };

    let total = 0;
    for(let p of totales){
        total += p.price * p.count;
    }

    return (
        <div className="cart-page d-flex justify-content-center">
            <div className="cart">
                <h3>Detalles del pedido:</h3>
                <div className="cart-gallery">
                    {totales.map((pizza) => (
                        <CartProduct
                            key={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            count={pizza.count}
                            img={pizza.img}
                            onAdd={() => addCount(pizza.id)}
                            onRemove={() => removeCount(pizza.id)}
                            onDelete={() => removeProduct(pizza.id)}
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
