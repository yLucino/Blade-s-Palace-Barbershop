import { db } from "../../.env.js";

export const putAddressStreet = (req, res) => {
  const locationId = req.params.id;
  const { street } = req.body;

  const q = "UPDATE address SET street = ? WHERE id = ?";

  db.query(q, [street, locationId], (error, results) => {
    if (error) {
      console.log('Error when updating the street field:', error);
      return res.status(500).json({ error: 'Error updating address.' })
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Address/Street not found.' });
    }

    res.status(200).json({ message: 'Street updated successfully.' });
  });
}

export const putAddressDistrict = (req, res) => {
  const districtId = req.params.id;
  const { district } = req.body;

  const q = "UPDATE address SET district = ? WHERE id = ?";

  db.query(q, [district, districtId], (error, results) => {
    if (error) {
      console.log('Error when updating the district field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Address/District not found.' });
    }

    res.status(200).json({ message: 'District updated successfully.' });
  });
}

export const putAddressCity = (req, res) => {
  const cityId = req.params.id;
  const { city } = req.body;

  const q = "UPDATE address SET city = ? WHERE id = ?";

  db.query(q, [city, cityId], (error, results) => {
    if (error) {
      console.log('Error when updating the city field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Address/City not found.' });
    }

    res.status(200).json({ message: 'City updated successfully.' });
  });
}

export const putAddressState = (req, res) => {
  const stateId = req.params.id;
  const { state } = req.body;

  const q = "UPDATE address SET state = ? WHERE id = ?";

  db.query(q, [state, stateId], (error, results) => {
    if (error) {
      console.log('Error when updating the state field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Address/State not found.' });
    }

    res.status(200).json({ message: 'State updated successfully.' });
  });
}

export const putAddressCEP = (req, res) => {
  const cepId = req.params.id;
  const { cep } = req.body;

  const q = "UPDATE address SET cep = ? WHERE id = ?";

  db.query(q, [cep, cepId], (error, results) => {
    if (error) {
      console.log('Error when updating the CEP field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Address/CEP not found.' });
    }

    res.status(200).json({ message: 'CEP updated successfully.' });
  });
}

export const putAddressNumber = (req, res) => {
  const numberId = req.params.id;
  const { number } = req.body;

  const q = "UPDATE address SET number = ? WHERE id = ?";

  db.query(q, [number, numberId], (error, results) => {
    if (error) {
      console.log('Error when updating the Number field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Address/Number not found.' });
    }

    res.status(200).json({ message: 'Number updated successfully.' });
  });
}

export const putAddressURLMaps = (req, res) => {
  const urlmapsId = req.params.id;
  const { urlmaps } = req.body;

  const q = "UPDATE address SET url_google_maps = ? WHERE id = ?";

  db.query(q, [urlmaps, urlmapsId], (error, results) => {
    if (error) {
      console.log('Error when updating the URL Google Maps field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Address/URLGoogleMaps not found.' });
    }

    res.status(200).json({ message: 'URL Google Maps updated successfully.' });
  });
}