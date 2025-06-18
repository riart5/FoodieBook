import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const generaciones = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="home-container">
      <h1 className="pokemon-title">POKEPALETA</h1>
      <p className="description">
        Una Pokédex visual donde puedes explorar todos los Pokémon por generación
        y descubrir sus paletas de colores únicas.
      </p>
      <div>
        <button className='bt1'>
            <a href="Generaciones">Ir a las generaciones</a>
        </button>
      </div>

      <div className="explicacion">
        <h2>This web is made by @riart5, check his GitHub!</h2>
      </div>
    </div>
  );
}

export default Home;
