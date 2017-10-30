var express = require('express');
var app = express();
var path = require('path');

app.get("/", function(req, res) {
  console.log("Home page requested");
  res.sendFile(path.join(__dirname + '/home.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
