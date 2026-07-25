const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const environment = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Progree DevOps Sample Application!',
    status: 'Running',
    environment: environment,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} in ${environment} mode.`);
});
