import { db } from "../../.env.js";

export const getEmployeeBarbers = (_, res) => {
  const q = "SELECT * FROM employee_barbers";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
