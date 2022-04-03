import { Pool } from 'pg';

let connection;

if (!connection) {
  connection = new Pool({
    connectionString: process.env.CONNECTION_STRING,
  });
}

export default connection;
