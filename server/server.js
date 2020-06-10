const PORT = 8080;
const server = require('./index');
const { db } = require('./database');

dbStore.sync().then(() => {
  server.listen(PORT, () =>
    console.log(`Listening on port ${PORT} http://localhost:${PORT}`)
  );
});
