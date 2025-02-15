const CardPizza = ({ name, price, ingredients, img }) => {
    const ingredientsString = ingredients.join(", ") + ".";

    return (
        <div className="card" style={{ width: "18rem" }}>
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
                    <a href="#" className="btn btn-success">Añadir al carrito</a>
                    <a href="#" className="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    );
}

export default CardPizza;
