import { Pool } from 'pg';

let connection;

if (!connection) {
  connection = new Pool({
    connectionString:
      'postgres://vdvzxfsg:tCsajkTNPcuSHKiRIDkN8u98PeJwn_Lu@raja.db.elephantsql.com/vdvzxfsg',
  });
}

export default connection;
