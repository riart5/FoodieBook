import { Link } from 'react-router-dom';
import './Generaciones.css';

function Generaciones() {
  const generaciones = [
    { id: 1, nombre: 'Rojo/Azul/Amarillo' },
    { id: 2, nombre: 'Oro/Plata/Cristal' },
    { id: 3, nombre: 'Rubí/Zafiro/Esmeralda' },
    { id: 4, nombre: 'Diamante/Perla/Platino' },
    { id: 5, nombre: 'Blanco/Negro' },
    { id: 6, nombre: 'X/Y' },
    { id: 7, nombre: 'Sol/Luna' },
    { id: 8, nombre: 'Espada/Escudo' },
    { id: 9, nombre: 'Escarlata/Púrpura' },
  ];

  return (
    <div className="gen-page">
      <h1 className="gen-title">Generaciones Pokémon</h1>
      <div className="gen-list">
        {generaciones.map((gen) => (
          <Link to={`/generacion/${gen.id}`} key={gen.id} className="gen-box">
            <span>Generación {gen.id}</span>
            <small>{gen.nombre}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Generaciones;
