import connection from '../../utils/db';

export default async function handler(req, res) {
  try {
    const query = 'SELECT * FROM staff';
    const staff = await connection.query(query);
    res.send(staff);
  } catch (error) {
    console.log(error);

    /*
     to support running locally for testing without setting up a database
     enable the following code
    */
    if (error.code=== 'ECONNREFUSED' && process && process.env.NODE_ENV === 'development') {
      const staff=[];

      for (let id = 1; id <= 1000; id++) {
        staff.push({
          "id": id,
          "first_name": "first" + id,
          "last_name": "last" + id,
          "email": "member" + id + "@company.com",
          "phone": "12345" + id,
          "office": "place" + id,
          "job_title": "Worker " + id
        })
      }
      res.json({"rows":staff});
    }
  }
}
