import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import ColorThief from 'colorthief';
import './PokemonDetalle.css';

function PokemonDetalle() {
  const { nombre } = useParams();
  const [datos, setDatos] = useState(null);
  const [colores, setColores] = useState([]);
  const imgRef = useRef();

  // Obtener los datos del Pokémon desde la PokéAPI
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(res => res.json())
      .then(data => setDatos(data));
  }, [nombre]);

  // Extraer colores dominantes de la imagen cuando cargue
  const extraerColores = () => {
    const colorThief = new ColorThief();
    if (imgRef.current.complete) {
      const palette = colorThief.getPalette(imgRef.current, 5);
      setColores(palette);
    } else {
      imgRef.current.onload = () => {
        const palette = colorThief.getPalette(imgRef.current, 5);
        setColores(palette);
      };
    }
  };

  if (!datos) return <p className="pokemon-detalle">Cargando datos de {nombre}...</p>;

  const sprite = datos.sprites.front_default;

  return (
    <div className="pokemon-detalle">
      <h1>{nombre}</h1>
      <img
        src={sprite}
        alt={nombre}
        ref={imgRef}
        crossOrigin="anonymous"
        onLoad={extraerColores}
      />

      <h2>Tipos</h2>
      <ul>
        {datos.types.map((tipo) => (
          <li key={tipo.slot}>{tipo.type.name}</li>
        ))}
      </ul>

      <h2>Colores dominantes</h2>
      <div className="colores-paleta">
        {colores.map((rgb, i) => {
          const hex = `#${rgb.map(c => c.toString(16).padStart(2, '0')).join('')}`;
          return (
            <div
              key={i}
              className="color-box"
              style={{ backgroundColor: hex }}
              title={hex}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonDetalle;
