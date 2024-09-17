import { db } from "../.env.js";

export const getServices = (_, res) => {
  const q = "SELECT * FROM services";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
