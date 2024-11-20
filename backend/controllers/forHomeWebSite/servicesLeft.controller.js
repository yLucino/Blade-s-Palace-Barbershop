import { db } from "../../.env.js";

export const getServicesLeft = (_, res) => {
  const q = "SELECT * FROM services_left";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getServicesLeftId = (req, res) => {
  const id = req.params.id;

  const q = "SELECT * FROM services_left WHERE id = ?"

  db.query(q, [id], (error, data) => {
    if (error) {
      console.log('Error when get services_left id:', error);
      return res.status(500).json({ error: 'Error geting services_left id.' })
    }

    res.status(200).json(data);
  })
}