import express from 'express'
import morgan from 'morgan'

import postRoutes from './routes/post.routes'
import rolRoutes from './routes/rol.routes'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/auth/post', postRoutes);
app.use('/api/auth/rol', rolRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a Node JS');
});

export default app;
