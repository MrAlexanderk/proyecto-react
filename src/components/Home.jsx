import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../assets/pizzas'

function Home() {

    return (
      <>
        <Header/>
        <div className="gallery bg-light d-flex justify-content-center gap-3 px-5 py-5">
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
  