import express from 'express';
import bodyParser from 'body-parser'

import productsRoutes from './routes/productsRoutes.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/products', productsRoutes)

app.get('/', (req, res) => { res.send('Hello world') });

app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);