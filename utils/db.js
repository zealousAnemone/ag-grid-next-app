import { Pool } from 'pg';

let connection = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

export default connection;
