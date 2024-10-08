// connect to database first
const connectToMongodB = require('./db');
connectToMongodB();


const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


// Enable CORS for localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));
 
// in order to use req.body we need to include this -> to pass requests in json format
app.use(express.json());

// every route written in auth.js will start after end point /api/auth -> same for /api/notes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`Backend running on port:${port}`)
})