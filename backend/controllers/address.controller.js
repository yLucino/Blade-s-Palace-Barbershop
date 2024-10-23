import { db } from "../.env.js";

export const getAddress = (_, res) => {
  const q = "SELECT * FROM address";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
