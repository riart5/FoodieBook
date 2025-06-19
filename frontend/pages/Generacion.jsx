import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Generacion.css';

function Generacion() {
  const { id } = useParams();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/generation/${id}`)
      .then(res => res.json())
      .then(data => {
        const species = data.pokemon_species;
        const ordenados = species.sort((a, b) => a.name.localeCompare(b.name));
        setPokemons(ordenados);
      });
  }, [id]);

  return (
    <div className="generacion-page">
      <h2 className="generacion-title">Generación {id}</h2>
      <div className="pokemon-list">
        {pokemons.map((poke, i) => {
          const nombre = poke.name;
          const index = poke.url.split('/').filter(Boolean).pop();
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

          return (
            <Link to={`/pokemon/${nombre}`} key={nombre} className="pokemon-card">
              <img src={img} alt={nombre} />
              <h3>{nombre}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Generacion;
