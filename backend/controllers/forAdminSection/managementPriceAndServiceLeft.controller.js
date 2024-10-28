import { db } from "../../.env.js";

// API for PriceAndServiceLeft PUT | POST | DELETE
// PUT
export const putServiceLeftTitle = (req, res) => {
  const titleId = req.params.id;
  const { title } = req.body;

  const q = "UPDATE services_left SET title = ? WHERE id = ?";

  db.query(q, [title, titleId], (error) => {
    if (error) {
      console.log('Error when updating the title field:', error);
      return res.status(500).json({ error: 'Error updating service_left.' })      
    }

    res.status(200).json({ message: 'Title updated successfully.' });
  });
}

export const putServiceLeftImageUrl = (req, res) => {
  const imageUrlId = req.params.id;
  const { imageUrl } = req.body;

  const q = "UPDATE services_left SET imageUrl = ? WHERE id = ?";

  db.query(q, [imageUrl, imageUrlId], (error) => {
    if (error) {
      console.log('Error when updating the imageUrl field:', error);
      return res.status(500).json({ error: 'Error updating service_left.' })      
    }

    res.status(200).json({ message: 'Image URL updated successfully.' });
  });
}

export const putServiceLeftDescription = (req, res) => {
  const descriptionId = req.params.id;
  const { description } = req.body;

  const q = "UPDATE services_left SET description = ? WHERE id = ?";

  db.query(q, [description, descriptionId], (error) => {
    if (error) {
      console.log('Error when updating the description field:', error);
      return res.status(500).json({ error: 'Error updating service_left.' })      
    }

    res.status(200).json({ message: 'Description updated successfully.' });
  });
}

export const putServiceLeftPriceNoPlan = (req, res) => {
  const priceNoPlanId = req.params.id;
  const { priceNoPlan } = req.body;

  const q = "UPDATE services_left SET priceNoPlan = ? WHERE id = ?";

  db.query(q, [priceNoPlan, priceNoPlanId], (error) => {
    if (error) {
      console.log('Error when updating the priceNoPlan field:', error);
      return res.status(500).json({ error: 'Error updating service_left.' })      
    }

    res.status(200).json({ message: 'Price No Plan updated successfully.' });
  });
}

export const putServiceLeftPriceInPlan = (req, res) => {
  const priceInPlanId = req.params.id;
  const { priceInPlan } = req.body;

  const q = "UPDATE services_left SET priceInPlan = ? WHERE id = ?";

  db.query(q, [priceInPlan, priceInPlanId], (error) => {
    if (error) {
      console.log('Error when updating the priceInPlan field:', error);
      return res.status(500).json({ error: 'Error updating service_left.' })      
    }

    res.status(200).json({ message: 'Price In Plan updated successfully.' });
  });
}

// POST
export const postNewServiceLeft = (req, res) => {
  const { title, imageUrl, description, priceNoPlan, priceInPlan } = req.body.serviceLeft;

  const q = "INSERT INTO services_left (title, imageUrl, description, priceNoPlan, priceInPlan) VALUES (?, ?, ?, ?, ?)";

  db.query(q, [title, imageUrl, description, priceNoPlan, priceInPlan], (error) => {
    if (error) {
      console.log('Error when adding the new Service Left', error);
      res.status(500).json({ error: 'Error adding ServiceLeft.' })
    }

    res.status(200).json({ message: 'ServiceLeft added successfully.' });
  });
}

// DELETE
export const deleteServiceLeft = (req, res) => {
  const serviceLeftId = req.params.id;

  const q = "DELETE FROM services_left WHERE id = ?";

  db.query(q, [serviceLeftId], (error) => {
    if (error) {
      console.log('Error when deleting the ServiceLeft', error);
      return res.status(500).json({ error: 'Error deleting ServiceLeft.' })
    }

    res.status(200).json({ message: 'ServiceLeft deleted successfully.' });
  });
}