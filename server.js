const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/angular-seo-course-front'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-seo-course-front/index.html'));
});

app.listen(process.env.PORT || 4200);
console.log('App listening on PORT ', process.env.PORT || 4200);
