import { db } from "../.env.js";
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const loginAdminRouter =
app.post('/admin', (req, res) => {
  const q = "SELECT * FROM bpbs_db.admin WHERE user = ? AND password = ?";
  
  db.query(q, [req.body.user, req.body.password], (err, data) => {
    if(err) return res.json("ERROR");
    if(data.length > 0) {
      return res.json("Login Successfully")
    } else {
      return res.json("No record user or password");
    };
  });
});

export default loginAdminRouter
