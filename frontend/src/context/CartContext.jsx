import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [lastAdded, setLastAdded] = useState(null);
    const MySwal = withReactContent(Swal);

    const addToCart = ({ id, price, name, img }) => {
        setCart((prevCart) => {
            const productFound = prevCart.find(product => product.id === id);
            if (productFound) {
                return prevCart.map(product =>
                    product.id === id ? { ...product, count: product.count + 1 } : product
                );
            } else {
                setLastAdded(name);
                return [...prevCart, { id, price, name, img, count: 1 }];
            }
        });
    };

    useEffect(() => {
        if (lastAdded) {
            MySwal.fire({
                title: "Pizza agregada al carrito 🍕",
                text: `Has agregado una Pizza ${lastAdded}`,
                icon: "success",
            });
            setLastAdded(null);
        }
    }, [lastAdded]);

    const removeFromCart = ({ id }) => {
        setCart((prevCart) => {
            return prevCart.reduce((acc, product) => {
                if (product.id === id) {
                    if (product.count > 1) {
                        acc.push({ ...product, count: product.count - 1 });
                    }
                } else {
                    acc.push(product);
                }
                return acc;
            }, []);
        });
    };

    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
