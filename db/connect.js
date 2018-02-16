const {Client} = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'projeto1-bd2',
  password: 'secretpassword',
  port: 5432,
}).connect();
