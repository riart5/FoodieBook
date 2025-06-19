import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="pokemon-title">POKEPALETA</h1>
      <p className="description">
        Explora todos los Pokémon por generación y descubre sus paletas de colores extraídas directamente de sus sprites.
      </p>
      <Link to="/generaciones" className="home-button">Ver Generaciones</Link>
    </div>
  );
}

export default Home;
