import connection from '../../utils/db';

export default async function handler(req, res) {
  try {
    const query = 'SELECT * FROM people LIMIT 50';
    const people = await connection.query(query);
    res.send(people);
  } catch (error) {
    console.log(error);
  }
}
