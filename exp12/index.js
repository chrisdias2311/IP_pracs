var express = require('express');
var cookieParser = require('cookie-parser'); // Require the cookie-parser middleware
var app = express();


app.use(cookieParser()); //middleware


app.get('/set_cookie', function (req, res) {
  res.cookie('name', 'express').send('Cookie set: name=express');
});

// Get a cookie
app.get('/get_cookie', function (req, res) {
  var cookieValue = req.cookies.name;
  if (cookieValue) {
    res.send('Cookie value: ' + cookieValue);
  } else {
    res.send('Cookie "name" not set');
  }
});

// Delete a cookie
app.get('/clear_cookie', function (req, res) {
  res.clearCookie('name');
  res.send('Cookie "name" cleared');
});

app.listen(5000);
