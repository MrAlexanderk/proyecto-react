import { createContext, useState, useContext } from "react";
import { pizzaCart } from "../assets/pizzas";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = ({id, price, name, img}) =>{
        const productFoundIndex = cart.findIndex(product => product.id === id);
        const product = {id, price, name, img, count: 1};
        if(productFoundIndex >= 0){
            cart[productFoundIndex].count++;
        }
        else{
            setCart([...cart, product]);
        }
    }

    const removeFromCart = ({id, price, name, img}) =>{
        const productFoundIndex = cart.findIndex(product => product.id === id);
        if(productFoundIndex >= 0){
            if(cart[productFoundIndex].count > 1){
                cart[productFoundIndex].count--;
            }
            else{
                cart.splice(productFoundIndex, 1);
            }
        }
    }

    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
