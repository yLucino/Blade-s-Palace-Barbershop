import { db } from "../.env.js";

export const getServicesRight = (_, res) => {
  const q = "SELECT * FROM services_right";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
