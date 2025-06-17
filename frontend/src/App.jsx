import { useEffect, useState } from 'react';

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/pokemon')
      .then(res => res.json())
      .then(data => {
        console.log('🐱‍👤 Datos recibidos:', data);
        setPokemons(data);
      })
      .catch(err => {
        console.error('❌ Error al hacer fetch:', err);
        setPokemons([]);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Pokepaleta</h1>

      {pokemons === null ? (
        <p>Cargando Pokémon...</p>
      ) : Array.isArray(pokemons) && pokemons.length > 0 ? (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {pokemons.map(poke => (
            <div key={poke.id} style={{ border: '1px solid gray', padding: '1rem' }}>
              <img src={poke.imagen} alt={poke.nombre} />
              <h3>{poke.nombre}</h3>
              <p>Generación: {poke.generacion}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron Pokémon.</p>
      )}
    </div>
  );
}

export default App;
