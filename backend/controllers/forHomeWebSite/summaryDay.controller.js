import { db } from "../../.env.js";

export const getSummaryDay = (_, res) => {
  const q = "SELECT * FROM bpbs_db.summary_service";

  db.query(q, (error, data) => {
    if (error) {
      console.log('Error when get summary day:', error);
      return res.status(500).json({ error: 'Error get summaryDay.'})
    }

    res.status(200).json(data);
  })
}