import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Generacion.css';

function Generacion() {
  const { id } = useParams();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/pokemon?gen=${id}`)
      .then(res => res.json())
      .then(data => setPokemons(data));
  }, [id]);

  return (
    <div className="generacion-page">
      <h2 className="generacion-title">Pokémon de la Generación {id}</h2>
      <div className="pokemon-list">
        {pokemons.map(poke => (
          <div key={poke.id} className="pokemon-card">
            <img src={poke.imagen} alt={poke.nombre} />
            <h3>{poke.nombre}</h3>
            <p>Generación: {poke.generacion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Generacion;
