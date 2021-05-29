const express = require('express');
const path = require('path');
const enforce = require('express-sslify');
const api = require('./api');

const port = process.env.PORT || 3000;
const app = express();

const VUE_APP_DIR = path.join(__dirname, '..', '/dist');

if (process.env.NODE_ENV === 'production') {
  // Use SSL on Heroku
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // Serve build VUE app
  app.use(express.static(VUE_APP_DIR));
}

// add API
app.use('/api', api);

app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  return res.status(status).send('Something went wrong while processing your request!');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
