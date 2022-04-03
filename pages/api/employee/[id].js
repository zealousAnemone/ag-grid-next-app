import connection from '../../../utils/db.js';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const query = `SELECT * FROM staff WHERE id = '${id}'`;
    const employee = await connection.query(query);
    res.send(employee);
  } catch (error) {
    console.log(error);
  }
}
