import { db } from "../../.env.js";

// API for SummaryDayServicePage PUT
export const putSummaryDayService = (req, res) => {
  const summaryId = req.params.id;
  const { summary } = req.body;

  const q = "UPDATE bpbs_db.summary_service SET summary = ? WHERE id = ?";

  db.query(q, [summary, summaryId], (error) => {
    if (error) {
      console.log('Error when update summary_service:', error);
      return res.status(500).json({ error: 'Error updated summary_service.' })
    }

    res.status(200).json({ message: 'Summary Service updated successfully.' })
  })
}