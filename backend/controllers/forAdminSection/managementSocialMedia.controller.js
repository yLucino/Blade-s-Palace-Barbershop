import { db } from "../../.env.js";

// API for Social Media PUT
export const putSocialMediaUrl = async (req, res) => {
  const socialMediaUrlId = req.params.id;
  const { socialMediaUrl } = req.body;

  const q = "UPDATE social_media SET url = ? WHERE id = ?";

  db.query(q, [socialMediaUrl, socialMediaUrlId], (error) => {
    if (error) {
      console.log('Error when updating the url field:', error);
      return res.status(500).json({ error: 'Error updating Social Media.' });
    }

    res.status(200).json({ message: 'URL updated successfully.' });
  });
}