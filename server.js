const express = require('express');
const path = require('path');
const app = express();
var port = process.env.PORT || 8080;
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });
app.listen(port);
console.log('Server started! At http://localhost:' + port);     