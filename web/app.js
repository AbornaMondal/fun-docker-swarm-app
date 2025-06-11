const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

const client = redis.createClient({ url: 'redis://redis:6379' });
client.connect();

app.get('/', async (req, res) => {
  let visits = 0;
  try {
    visits = await client.incr('visits');
  } catch (err) {
    console.error(err);
  }
  res.send(`<h1>Hello from Docker Swarm!</h1><p>Visitor count: ${visits}</p>`);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});