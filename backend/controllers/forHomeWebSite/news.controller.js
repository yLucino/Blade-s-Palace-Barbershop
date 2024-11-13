import { db } from "../../.env.js";

export const getNews = (_, res) => {
  const q = "SELECT * FROM bpbs_db.news"

  db.query(q, (error, data) => {
    if (error) {
      console.log('Error when get all news:', error);
      return res.status(500).json({ error: 'Error geting all news.' })
    }

    res.status(200).json(data);
  })
}