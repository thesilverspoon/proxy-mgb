const express = require('express');
const parser = require('body-parser');
const _ =require('underscore');
const fs = require('file-system');

const app = express();

app.use(parser.json());

app.use(express.static(__dirname  + '/dist'));
app.get('/:id', (req, res) => {
  fs.readFile(__dirname + '/dist/template.html', 'utf8', function (err, html) {
    var template = _.template(html);
    var result = template({ id: req.params.id }); 
    res.send(result);
  });
})
const port = process.env.PORT || 5005;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
