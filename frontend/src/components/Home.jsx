import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../assets/pizzas'

function Home() {

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
  