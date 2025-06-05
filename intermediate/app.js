const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({ url: 'redis://redis:6379' });

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

app.get('/', async (req, res) => {
  const count = await client.incr('hits');
  res.send(`Hello, Docker! This page has been visited ${count} times.`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});