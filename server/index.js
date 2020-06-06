const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const app = express();
module.exports = app;

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
// app.use

// handles any none existing files  that bypass express.static
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

//serves up entry react index file
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// ERROR CATCHING HANDLING: SERVER
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
