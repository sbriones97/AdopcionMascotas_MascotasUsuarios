const express = require('express')
const cors = require('cors')
const { routesUsuarios, routesMascotas } = require('./src/routes') 

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express()
const { json, urlencoded } = express

const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))
app.use(json())
app.use(urlencoded({ extended: false }))

app.use(routesUsuarios)
app.use(routesMascotas)

app.listen(PORT,HOST, () => { 
    console.log(`App listening ${PORT} and host ${HOST}`) 
})

// // App
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
