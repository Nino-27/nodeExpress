const express = require('express');
const app = express();
const rutas = require('./rutas/rutass')

app.use(express.static('public'))
app.use(express.json())
app.use(rutas)




// Listening
const PORT = 5000;
app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));