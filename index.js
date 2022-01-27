const express = require('express');
const app = express();

app.use(express.json());

app.post('/transaction', (req, res) => {
  const data = req.body;
  const dataString = JSON.stringify(data);

  console.log(dataString);
  
  res.send(data);
});

app.listen(3000);