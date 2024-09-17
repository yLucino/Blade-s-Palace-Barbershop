import { db } from "../.env.js";

export const getMonthlyPlans = (_, res) => {
  const q = "SELECT * FROM monthly_plans";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
