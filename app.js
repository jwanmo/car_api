// index.js

const express = require('express');
const carRoute = require('./car_api.js');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, From Jwan');
});

app.get('/cars', carRoute.getAllCars);

app.get('/cars/:car_id', carRoute.getCarById);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
