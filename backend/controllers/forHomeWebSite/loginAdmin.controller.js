import { db } from "../../.env.js";
import { SECRET_KEY } from "../../.env.js";
import jwt from 'jsonwebtoken';

export const postLoginAdmin = (req, res) => {
  const q = "SELECT * FROM bpbs_db.admin WHERE user = ? AND password = ?";
  
  db.query(q, [req.body.user, req.body.password], (err, data) => {
    if(err) return res.json("ERROR"); 
    if(data.length > 0) {
      const token = jwt.sign(
        {
          id: data[0].id,
          user: data[0].user
        },
        SECRET_KEY,
        { expiresIn: '1h' }
      );
      return res.json({token, message: "Login Successfully"});
    } else {
      return res.status(401).json({message: "No record user or password"});
    };
  });
};