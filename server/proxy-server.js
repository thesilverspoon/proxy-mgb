const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(parser.json());

app.use(express.static(__dirname  + '/dist'));

const port = 5005;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})