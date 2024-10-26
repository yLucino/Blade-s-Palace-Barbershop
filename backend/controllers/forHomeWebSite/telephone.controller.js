import { db } from "../../.env.js";

export const getTelephone = (_, res) => {
  const q = "SELECT * FROM telephone";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
