import { db } from "../../.env.js";

// API for TeamPage PUT | POST | DELETE
// PUT
export const putBarber = (req, res) => {
  const barberId = req.params.id;
  const { imageUrl, name, jobRole, whatsappUrl, instagramUrl, facebookUrl, description, businessAddress } = req.body;

  const q = "UPDATE bpbs_db.employee_barbers SET imageUrl = ?, name = ?, jobRole = ?, whatsappUrl = ?, instagramUrl = ?, facebookUrl = ?, description = ?, businessAddress = ? WHERE id = ?"

  db.query(q, [imageUrl, name, jobRole, whatsappUrl, instagramUrl, facebookUrl, description, businessAddress, barberId], (error) => {
    if (error) {
      console.log('Error when update employee_barbers', error);
      return res.status(500).json({ error: 'Erro editing employee_barbers.' })
    }

    res.status(200).json({ message: 'Barber updated successfully.' })
  })
}

// POST
export const postBarber = (req, res) => {
  const { imageUrl, name, jobRole, whatsappUrl, instagramUrl, facebookUrl, description, businessAddress } = req.body.barber;

  const q = "INSERT INTO bpbs_db.employee_barbers SET imageUrl = ?, name = ?, jobRole = ?, whatsappUrl = ?, instagramUrl = ?, facebookUrl = ?, description = ?, businessAddress = ?"

  db.query(q, [imageUrl, name, jobRole, whatsappUrl, instagramUrl, facebookUrl, description, businessAddress], (error) => {
    if (error) {
      console.log('Error when adding employee_barbers', error);
      return res.status(500).json({ error: 'Erro adding employee_barbers.' })
    }

    res.status(200).json({ message: 'Barber added successfully.' })
  });
}

// DELETE
export const deleteBarber = (req, res) => {
  const barberId = req.params.id

  const q = "DELETE FROM bpbs_db.employee_barbers WHERE id = ?"

  db.query(q, [barberId], (error) => {
    if (error) {
      console.log('Erro in delete barber', error);
      return res.status(500).json({ error: 'Error deleting barber.' })
    }

    res.status(200).json({ message: 'Barber deleted successfully.' })
  });
}