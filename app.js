const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'))

app.get('/index', (request, response) => {
  response.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get('/',(request, response) =>{
    response.sendFile(path.join(__dirname, "./views/index.html"));
});



app.listen(8080, () => {
  console.log('Server en ejecución en http://localhost:8080');
});
