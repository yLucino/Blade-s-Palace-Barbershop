import { db } from "../../.env.js";

// API for PriceAndServiceRight PUT | POST | DELETE
// PUT
export const putServiceRightTitle = (req, res) => {
  const titleId = req.params.id;
  const { title } = req.body;

  const q = "UPDATE services_right SET title = ? WHERE id = ?";

  db.query(q, [title, titleId], (error) => {
    if (error) {
      console.log('Error when updating the title field:', error);
      return res.status(500).json({ error: 'Error updating service_right.' })      
    }

    res.status(200).json({ message: 'Title updated successfully.' });
  });
}

export const putServiceRightImageUrl = (req, res) => {
  const imageUrlId = req.params.id;
  const { imageUrl } = req.body;

  const q = "UPDATE services_right SET imageUrl = ? WHERE id = ?";

  db.query(q, [imageUrl, imageUrlId], (error) => {
    if (error) {
      console.log('Error when updating the imageUrl field:', error);
      return res.status(500).json({ error: 'Error updating service_right.' })      
    }

    res.status(200).json({ message: 'Image URL updated successfully.' });
  });
}

export const putServiceRightDescription = (req, res) => {
  const descriptionId = req.params.id;
  const { description } = req.body;

  const q = "UPDATE services_right SET description = ? WHERE id = ?";

  db.query(q, [description, descriptionId], (error) => {
    if (error) {
      console.log('Error when updating the description field:', error);
      return res.status(500).json({ error: 'Error updating service_right.' })      
    }

    res.status(200).json({ message: 'Description updated successfully.' });
  });
}

export const putServiceRightPriceNoPlan = (req, res) => {
  const priceNoPlanId = req.params.id;
  const { priceNoPlan } = req.body;

  const q = "UPDATE services_right SET priceNoPlan = ? WHERE id = ?";

  db.query(q, [priceNoPlan, priceNoPlanId], (error) => {
    if (error) {
      console.log('Error when updating the priceNoPlan field:', error);
      return res.status(500).json({ error: 'Error updating service_right.' })      
    }

    res.status(200).json({ message: 'Price No Plan updated successfully.' });
  });
}

export const putServiceRightPriceInPlan = (req, res) => {
  const priceInPlanId = req.params.id;
  const { priceInPlan } = req.body;

  const q = "UPDATE services_right SET priceInPlan = ? WHERE id = ?";

  db.query(q, [priceInPlan, priceInPlanId], (error) => {
    if (error) {
      console.log('Error when updating the priceInPlan field:', error);
      return res.status(500).json({ error: 'Error updating service_right.' })      
    }

    res.status(200).json({ message: 'Price In Plan Right updated successfully.' });
  });
}

// POST
export const postNewServiceRight = (req, res) => {
  const { title, imageUrl, description, priceNoPlan, priceInPlan } = req.body.serviceRight;

  const q = "INSERT INTO services_right (title, imageUrl, description, priceNoPlan, priceInPlan) VALUES (?, ?, ?, ?, ?)";

  db.query(q, [title, imageUrl, description, priceNoPlan, priceInPlan], (error) => {
    if (error) {
      console.log('Error when adding the new Service Right', error);
      res.status(500).json({ error: 'Error adding ServiceRight.' })
    }

    res.status(200).json({ message: 'ServiceRight added successfully.' });
  });
}

// DELETE
export const deleteServiceRight = (req, res) => {
  const serviceRightId = req.params.id;

  const q = "DELETE FROM services_right WHERE id = ?";

  db.query(q, [serviceRightId], (error) => {
    if (error) {
      console.log('Error when deleting the Service Right', error);
      return res.status(500).json({ error: 'Error deleting ServiceRight.' })
    }

    res.status(200).json({ message: 'ServiceRight deleted successfully.' });
  });
}