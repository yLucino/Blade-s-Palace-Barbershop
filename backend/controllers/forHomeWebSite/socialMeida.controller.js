import { db } from "../../.env.js";

export const getSocialMedia = (_, res) => {
  const q = "SELECT * FROM social_media";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
