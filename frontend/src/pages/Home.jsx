import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { useState, useEffect } from 'react'


function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetchPizza();
  }, []);

  const fetchPizza = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas');
    const data = await res.json();
    setPizzas(data);
  };

    return (
      <>
        <Header/>
        <div className="gallery bg-light row">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>

      </>
    )
  }
  
  export default Home
  