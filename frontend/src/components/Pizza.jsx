import { useState, useEffect } from 'react';

const Pizza = ({ id }) => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const [pizza, setPizza] = useState({
        id: '',
        name: '',
        price: 0,
        ingredients: [],
        img: '',
        desc: ''
    });

    useEffect(() => {
        fetchPizza();
    }, []);

    const fetchPizza = async () => {
        const res = await fetch('http://localhost:5000/api/pizzas/' + id);
        const data = await res.json();
        setPizza(data);
    };
    return (
        <div className="row d-flex justify-content-center main-card-container ">
            <div className="card col-12 col-sm-12 col-lg-8 main-card">
                <img src={pizza.img} className="card-img-mid" alt={pizza.name} />
                <div className="card-body">
                    <h3 className="card-title d-flex justify-content-center fs-1">Pizza {pizza.name}</h3>
                    <hr />
                    <p className="fs-4">{pizza.desc}</p>
                    <h5 className="d-flex justify-content-left fs-3">🍕 Ingredientes:</h5>
                    <ul>
                        {pizza.ingredients.map((ingredient) => <li className="fs-5" key={ingredient}> {capitalize(ingredient)}</li>)}
                    </ul>
                    <div className='d-flex justify-content-center'>
                        <h4 className="d-flex justify-content-center fs-1 price-anim">${pizza.price.toLocaleString("es-CL")}</h4>
                    </div>
                    <a href="#" className="btn btn-success main-btn">Añadir al carrito</a>
                </div>
            </div>
        </div>

    );
}

export default Pizza;
