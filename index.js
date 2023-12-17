const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engin', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/calculator', (req, res) => {
  let result = Number(req.query.num1) + Number(req.query.num2);
  console.log(req.query);
  res.send(`계산결과 = ${result}`);
});

app.post('/calculator', (req, res) => {
  console.log(req.body);
  let result = Number(req.body.num1) + Number(req.body.num2);
  res.send(`결과는 = ${result}`);
});

app.get('*', (req, res) => {
  res.status(404).send('404! not found page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
