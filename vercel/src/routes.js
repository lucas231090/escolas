const express = require('express')
const path = require('path');
const router = express.Router()

router.get('/server', (request, response)=>{
    response.json({message: "servidor on-line 💻"})
})

router.get('/dirce', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/dirce/index.html'));
});

router.get('/dirce/grupoa', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/dirce/grupoA.html'));
});

router.get('/dirce/grupob', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/dirce/grupoB.html'));
});

router.get('/ines', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/ines/index.html'));
});

router.get('/ines/grupoa', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/ines/grupoA.html'));
});

router.get('/ines/grupob', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/ines/grupoB.html'));
});

router.get('/my-profile', (request, response) => {
  response.status(200).sendFile(path.join(__dirname + '/../public/my-profile/index.html'));
});


module.exports = router
