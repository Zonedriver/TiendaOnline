const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')

app.use(helmet());
app.use(cors())


app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get('/', (req, res) => {
    return res.send('<h1>Welcome to Express</h1>');
  });

app.listen(3001, () => {
    console.log(`Express on port 3001`);
  });


  //investigar helmet y cors
  //Usuario type Cliente y Admin
  //Registro y Login
  //Productos
  //Reseñas
  //Ordenes de Compra

