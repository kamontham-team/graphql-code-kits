const express = require('express');
const bodyParser = require('body-parser');
const apollo = require('./graphql');

module.exports = async () => {
  const app = express();
  const apolloClient = await apollo();

  app.use(bodyParser.json({ limit: '2mb' }));
  await apolloClient.start();
  apolloClient.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: true,
    },
  });
  return app;
};
