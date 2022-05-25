import express from 'express'
import morgan from 'morgan'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));s

app.get('/', (req, res) => {
    res.send('Bienvenido a Node JS');
});

export default app;
