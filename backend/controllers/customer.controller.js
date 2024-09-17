import { db } from "../.env.js";

export const getCustomers = (_, res) => {
  const q = "SELECT * FROM customers";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
