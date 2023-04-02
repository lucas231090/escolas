//yarn start
const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();

app.use(router)

app.get('/', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/index.html'));
});

app.listen(3000, () => console.log('🚀Server started at http://localhost:3000'));
