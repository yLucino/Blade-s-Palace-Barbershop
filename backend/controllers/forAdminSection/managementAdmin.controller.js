import { db } from "../../.env.js";

// API for Address PUT | POST
// PUT
export const putAddressStreet = (req, res) => {
  const locationId = req.params.id;
  const { street } = req.body;

  const q = "UPDATE address SET street = ? WHERE id = ?";

  db.query(q, [street, locationId], (error) => {
    if (error) {
      console.log('Error when updating the street field:', error);
      return res.status(500).json({ error: 'Error updating address.' })
    }

    res.status(200).json({ message: 'Street updated successfully.' });
  });
}

export const putAddressDistrict = (req, res) => {
  const districtId = req.params.id;
  const { district } = req.body;

  const q = "UPDATE address SET district = ? WHERE id = ?";

  db.query(q, [district, districtId], (error) => {
    if (error) {
      console.log('Error when updating the district field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    res.status(200).json({ message: 'District updated successfully.' });
  });
}

export const putAddressCity = (req, res) => {
  const cityId = req.params.id;
  const { city } = req.body;

  const q = "UPDATE address SET city = ? WHERE id = ?";

  db.query(q, [city, cityId], (error) => {
    if (error) {
      console.log('Error when updating the city field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    res.status(200).json({ message: 'City updated successfully.' });
  });
}

export const putAddressState = (req, res) => {
  const stateId = req.params.id;
  const { state } = req.body;

  const q = "UPDATE address SET state = ? WHERE id = ?";

  db.query(q, [state, stateId], (error) => {
    if (error) {
      console.log('Error when updating the state field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    res.status(200).json({ message: 'State updated successfully.' });
  });
}

export const putAddressCEP = (req, res) => {
  const cepId = req.params.id;
  const { cep } = req.body;

  const q = "UPDATE address SET cep = ? WHERE id = ?";

  db.query(q, [cep, cepId], (error) => {
    if (error) {
      console.log('Error when updating the CEP field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    res.status(200).json({ message: 'CEP updated successfully.' });
  });
}

export const putAddressNumber = (req, res) => {
  const numberId = req.params.id;
  const { number } = req.body;

  const q = "UPDATE address SET number = ? WHERE id = ?";

  db.query(q, [number, numberId], (error) => {
    if (error) {
      console.log('Error when updating the Number field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    res.status(200).json({ message: 'Number updated successfully.' });
  });
}

export const putAddressURLMaps = (req, res) => {
  const urlmapsId = req.params.id;
  const { urlmaps } = req.body;

  const q = "UPDATE address SET url_google_maps = ? WHERE id = ?";

  db.query(q, [urlmaps, urlmapsId], (error) => {
    if (error) {
      console.log('Error when updating the URL Google Maps field:', error);
      return res.status(500).json({ error: 'Error updating address.' });
    }

    res.status(200).json({ message: 'URL Google Maps updated successfully.' });
  });
}

// POST
export const postNewAddress = (req, res) => {
  const { street, district, cep, number, url_google_maps, city, state } = req.body.address;

  const q = "INSERT INTO address (street, district, cep, number, url_google_maps, city, state) VALUES (?, ?, ?, ?, ?, ?, ?)";

  db.query(q, [street, district, cep, number, url_google_maps, city, state], (error) => {
    if (error) {
      console.log('Error when adding the address:', error);
      return res.status(500).json({ error: 'Error adding address.' })
    }

    res.status(201).json({ message: 'Address added successfully.' });
  });
}

// DELETE
export const deleteAddress = (req, res) => {
  const addressId = req.params.id;

  const q = "DELETE FROM address WHERE id = ?";

  db.query(q, [addressId], (error) => {
    if (error) {
      console.log('Error when deleting the address:', error);
      return res.status(500).json({ error: 'Error deleting address.' })
    }

    res.status(201).json({ message: 'Address deleted successfully.' });
  });
} 

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