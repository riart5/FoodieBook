import express from 'express';
import cors from 'cors';
import { db } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/pokemon', async (req, res) => {
  try {
    const [result] = await db.query('SELECT * FROM pokemon');
    res.json(result);
  } catch (err) {
    console.error('Error en la consulta:', err);
    res.status(500).json({ error: 'Error al obtener pokemons' });
  }
});

app.listen(3000, () => {
  console.log('Servidor backend en http://localhost:3000');
});
