import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Generacion() {
  const { id } = useParams();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/pokemon?gen=${id}`)
      .then(res => res.json())
      .then(data => setPokemons(data));
  }, [id]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Pokémon de la Generación {id}</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        {pokemons.map(poke => (
          <div key={poke.id} style={{ border: '1px solid gray', padding: '1rem' }}>
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
