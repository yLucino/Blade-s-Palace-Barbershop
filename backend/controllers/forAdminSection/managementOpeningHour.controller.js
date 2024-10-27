import { db } from "../../.env.js";

// API for OpeningHour PUT
export const putStatusOpen = (req, res) => {
  const statusId = req.params.id;
  const { status } = req.body;
  
  const q = "UPDATE opening_hours SET status_open = ? WHERE id = ?";

  db.query(q, [status, statusId], (error) => {
    if (error) {
      console.log('Error when updating the Status Open field:', error);
      return res.status(500).json({ error: 'Error updating opening_hours.' });      
    }

    res.status(200).json({ message: 'StatusOpen updated successfully.' });
  });
}

export const putHourOpen = (req, res) => {
  const openId = req.params.id;
  const { open } = req.body;

  const q = "UPDATE opening_hours SET time_open = ? WHERE id = ?";

  db.query(q, [open, openId], (error) => {
    if (error) {
      console.log('Error when updating the Hour Open field:', error);
      return res.status(500).json({ error: 'Error updating opening_hours.' });
    }

    res.status(200).json({ message: 'HourOpen updated successfully.' });
  });
}

export const putHourClose = (req, res) => {
  const closeId = req.params.id;
  const { close } = req.body;

  const q = "UPDATE opening_hours SET time_close = ? WHERE id = ?";

  db.query(q, [close, closeId], (error) => {
    if (error) {
      console.log('Error when updating the Hour Close field:', error);
      return res.status(500).json({ error: 'Error updating opening_hours.' });
    }

    res.status(200).json({ message: 'HourClose updated successfully.' });
  });
}