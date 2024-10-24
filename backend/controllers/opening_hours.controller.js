import { db } from "../.env.js";

export const getOpeningHours = (_, res) => {
  const q = "SELECT * FROM opening_hours";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
