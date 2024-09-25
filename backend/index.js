// connect to database first
const connectToMongodB = require('./db');
connectToMongodB();


const express = require('express')
const app = express()
const port = 3000

// every route written in auth.js will start after end point /api/auth -> same for /api/notes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`Backend running on port:${port}`)
})