const server = require('./server');

const port = 8989;
server().then(express => {
  express.listen(port, () => {
    console.log(`Started on http://localhost:${port}`);
  });
});
