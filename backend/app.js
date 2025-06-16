import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';

//Ahora vamos con la configuracion inicial

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Ruta de prueba 

app.get('/', (req, res) => {
    res.send('API FoodieBook funcionando');
});

//Aqui creamos la conexion a la base de datos

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

.then(() => {
    console.log('Conectado a MongoDB correctamente');
    app.use('/api/auth', authRoutes);
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
})

.catch((err) => {
    console.error('Error conectando con MongoDB:', err.message);
});