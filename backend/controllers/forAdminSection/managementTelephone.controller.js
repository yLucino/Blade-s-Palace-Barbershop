import { db } from "../../.env.js";

// API for Telephone PUT | POST | DELETE
// PUT
export const putTelephoneNumber = (req, res) => {
  const telephoneId = req.params.id;
  const { telephone } = req.body;

  const q = "UPDATE telephone SET number = ? WHERE id = ?";

  db.query(q, [telephone, telephoneId], (error) => {
    if (error) {
      console.log('Error when updating the number field:', error);
      return res.status(500).json({ error: 'Error updating telephone.' });
    }

    res.status(200).json({ message: 'Number updated successfully.' });
  });
}

export const putTelephoneUrl = (req, res) => {
  const url_api_whatsappId = req.params.id;
  const { url_api_whatsapp } = req.body;

  const q = "UPDATE telephone SET url_api_whatsapp = ? WHERE id = ?";

  db.query(q, [url_api_whatsapp, url_api_whatsappId], (error) => {
    if (error) {
      console.log('Error when updating the url_api_whatsapp field:', error);
      return res.status(500).json({ error: 'Error updating telephone.' });
    }

    res.status(200).json({ message: 'URL Api Whatsapp updated successfully.' });
  });
}

// POST
export const postNewTelephone = (req, res) => {
  const { number, url_api_whatsapp } = req.body.telephone;

  const q = "INSERT INTO telephone (number, url_api_whatsapp) VALUES (?, ?)";

  db.query(q, [number, url_api_whatsapp], (error) => {
    if (error) {
      console.log('Error when adding the telephne:', error);
      return res.status(500).json({ error: 'Error adding telephone.' });
    }

    res.status(200).json({ message: 'Telephone added successfully.' })
  });
}

// DELETE
export const deleteTelephone = (req, res) => {
  const telephoneId = req.params.id;

  const q = "DELETE FROM telephone WHERE id = ?";

  db.query(q, [telephoneId], (error) => {
    if (error) {
      console.log('Error when deleting the telephone');
      return res.status(500).json({ error: 'Error deleting telephone.' });
    }

    res.status(200).json({ message: 'Telephone deleted successfully.' });
  });
}