const express = require('express');
const path = require('path');

const app = express();


app.get('/index1', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index1.html'));
});

app.get('/index2', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index2.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
