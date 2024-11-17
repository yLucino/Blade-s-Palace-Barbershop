import { db } from "../../.env.js";

export const putNews = async (req, res) => {
  const newsId = req.params.id;
  const { title, subTitle, description, imageUrl } = req.body

  const q = "UPDATE bpbs_db.news SET title = ?, subTitle = ?, description = ?, imageUrl = ? WHERE id = ?";

  db.query(q, [title, subTitle, description, imageUrl, newsId], (error) => {
    if (error) {
      console.log('Error when update news', error);
      return res.status(500).json({ error: 'Error updating news.' })
    }

    res.status(200).json({ message: 'News updated successfully.' })
  });
}

export const postNews = async (req, res) => {
  const { title, subTitle, description, imageUrl } = req.body

  const q = "INSERT INTO bpbs_db.news (title, subTitle, description, imageUrl) VALUES (?, ?, ?, ?)"

  db.query(q, [title, subTitle, description, imageUrl], (error) => {
    if (error) {
      console.log('Error when add news', error);
      return res.status(500).json({ error: 'Error adding news.' })
    }

    res.status(200).json({ message: 'News added successfully.' })
  });
}

export const deleteNews = async (req, res) => {
  const newsId = req.params.id;

  const q = "DELETE FROM bpbs_db.news WHERE id = ?";

  db.query(q, [newsId], (error) => {
    if (error) {
      console.log('Error when delete news', error);
      return res.status(500).json({ error: 'Error deleting news.' })
    }

    res.status(200).json({ message: 'News deleted successfully.' })
  });
}