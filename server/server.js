const PORT = 8080;
const server = require('./index');

server.listen(PORT, () =>
  console.log(`Listening on port ${PORT} http://localhost:${PORT}`)
);
