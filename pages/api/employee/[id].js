import connection from '../../../utils/db.js';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const query = `SELECT * FROM staff WHERE id = '${id}'`;
    const employee = await connection.query(query);
    res.send(employee);
  } catch (error) {
    console.log(error);


    /*
     to support running locally for testing without setting up a database
     enable the following code
    */
     if (error.code=== 'ECONNREFUSED' && process && process.env.NODE_ENV === 'development') {
        res.json({"rows":[{
          "id": id,
          "first_name": "first" + id,
          "last_name": "last" + id,
          "email": "member" + id + "@company.com",
          "phone": "12345" + id,
          "office": "place" + id,
          "job_title": "Worker " + id
        }]})
      }

  }
}
