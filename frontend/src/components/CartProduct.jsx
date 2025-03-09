import { useState } from "react";

const CartProduct = ({ name, price, count, img, onAdd, onRemove, onDelete }) => {
    const [recuento, setRecuento] = useState(count);

    const incrementar = () => {
        setRecuento(recuento + 1);
        onAdd();
    };
    
    const decrementar = () => {
        if (recuento > 1) {
          setRecuento(recuento - 1);
          onRemove();
        } else {
            setRecuento(0);
            onDelete();
        }
    };

  return (
    <div className="cart-card">
        <img src={img} className="card-img-left" alt={name} />
        <div className="card-body-cart">
            <h3 className="card-title">Pizza {name}</h3>
            <hr />
            <h4 className="d-flex justify-content-center">${(price * count).toLocaleString("es-CL")}</h4>

            <div className="cart-item-butns py-2">
                <button type="button" onClick={decrementar} className={ recuento < 2 ? "btn btn-danger" : "btn btn-light"}><b>-</b></button>
                <p>{recuento}</p>
                <button type="button" onClick={incrementar} className="btn btn-light"><b>+</b></button>
            </div>
        </div>
    </div>
  );
};

export default CartProduct;
