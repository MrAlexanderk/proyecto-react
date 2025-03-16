import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

const Pizza = () => {
    const { cart, addToCart } = useContext(CartContext);
    const { id } = useParams();

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const [pizza, setPizza] = useState(null);
    const indexFound = cart.findIndex(product => product.id === id);
    let addedToCart = indexFound >= 0;
    let count = cart[indexFound]?.count || 0;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
                if (!res.ok) throw new Error('Error al obtener la pizza');
                const data = await res.json();
                setPizza(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
            
        };

        fetchPizza();
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (!pizza) return <p>No se encontró la pizza</p>;

    return (
        <div className="row d-flex justify-content-center main-card-container">
            <div className="card col-12 col-sm-12 col-lg-8 main-card">
                <img src={pizza.img} className="card-img-mid" alt={pizza.name} />
                <div className="card-body">
                    <h3 className="card-title d-flex justify-content-center fs-1">Pizza {pizza.name}</h3>
                    <hr />
                    <p className="fs-4">{pizza.desc}</p>
                    <h5 className="d-flex justify-content-left fs-3">🍕 Ingredientes:</h5>
                    <ul>
                        {pizza.ingredients.map((ingredient) => (
                            <li className="fs-5" key={ingredient}>{capitalize(ingredient)}</li>
                        ))}
                    </ul>
                    <div className='d-flex justify-content-center'>
                        <h4 className="d-flex justify-content-center fs-1 price-anim">${pizza.price.toLocaleString("es-CL")}</h4>
                    </div>
                    <button className="btn btn-success main-btn" 
                        onClick={() => addToCart({ id: pizza.id, price: pizza.price, name: pizza.name, img: pizza.img })}>
                        {addedToCart ? `Unidades en carrito: ${count}` : "Añadir al carrito"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;
