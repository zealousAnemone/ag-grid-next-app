import connection from '../../utils/db';

export default async function handler(req, res) {
  try {
    const query = 'SELECT * FROM staff';
    const staff = await connection.query(query);
    res.send(staff);
  } catch (error) {
    console.log(error);
  }
}
