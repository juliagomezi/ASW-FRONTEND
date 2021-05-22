/*function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}*/
const express = require('express');
const path = require('path');

const app = express();
//app.use(requireHTTPS);

app.use(express.static('./dist/ng-hackernews'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/ng-hackernews'}
  );
});

app.listen(process.env.PORT || 8080);

console.log('Running on port ${process.env.PORT || 8080}')
