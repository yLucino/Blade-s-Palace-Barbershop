import { db } from "../../.env.js";

export const getServicesRight = (_, res) => {
  const q = "SELECT * FROM services_right";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getServicesRightId = (req, res) => {
  const id = req.params.id;

  const q = "SELECT * FROM services_right WHERE id = ?"

  db.query(q, [id], (error, data) => {
    if (error) {
      console.log('Error when get services_right id:', error);
      return res.status(500).json({ error: 'Error geting services_right id.' })
    }

    res.status(200).json(data);
  })
}