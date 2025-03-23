import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CartProduct from "../components/CartProduct";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
    const { cart, addToCart, removeFromCart, total, clearCart } = useContext(CartContext);
    const { token } = useContext(UserContext);
    const [isProcessing, setIsProcessing] = useState(false);
    const [controller, setController] = useState(new AbortController());

    // Limpiar solicitudes al desmontar el componente
    useEffect(() => {
        return () => controller.abort();
    }, [controller]);

    const handleCheckout = async () => {
        setIsProcessing(true);
        try {
            const products = cart.map(pizza => ({
                productId: pizza.id,
                quantity: pizza.count
            }));

            const newController = new AbortController();
            setController(newController);

            const response = await axios.post(
                "http://localhost:5000/api/checkouts",
                {
                    products,
                    total: Math.round(total)
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    signal: newController.signal
                }
            );

            await Swal.fire({
                title: "¡Compra Exitosa!",
                html: `
                    <div>
                        <p>${response.data.message}</p>
                        <small>Usuario: ${response.data.user.email}</small>
                    </div>
                `,
                icon: "success",
                confirmButtonText: "Aceptar"
            });

            clearCart();

        } catch (error) {
            if (axios.isCancel(error)) {
                console.log("Solicitud cancelada:", error.message);
            } else {
                const errorMessage = error.response?.data?.error || 
                                  error.message || 
                                  "Error desconocido";
                
                await Swal.fire({
                    title: "Error en la compra",
                    text: errorMessage,
                    icon: "error",
                    confirmButtonText: "Aceptar"
                });
            }
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="cart-page d-flex justify-content-center">
            <div className="cart">
                <h3>Detalles del pedido:</h3>
                <div className="cart-gallery">
                    {cart.map((pizza) => (
                        <CartProduct
                            key={pizza.id}
                            {...pizza}
                            onAdd={() => addToCart(pizza)}
                            onRemove={() => removeFromCart(pizza)}
                        />
                    ))}
                </div>

                <h2>Total: ${total.toLocaleString("es-CL")}</h2>
                <button 
                    className="btn btn-success" 
                    onClick={handleCheckout}
                    disabled={!token || isProcessing || cart.length === 0}
                >
                    {isProcessing ? (
                        <>
                            <span className="spinner-border spinner-border-sm" role="status"></span>
                            Procesando...
                        </>
                    ) : "Pagar"}
                </button>
                
                {!token && <p className="text-danger"><i>Debes iniciar sesión para poder pagar</i></p>}
                {cart.length === 0 && <p className="text-success"><i>¡Carrito vacío! Agrega productos para continuar</i></p>}
            </div>
        </div>
    );
};

export default Cart;