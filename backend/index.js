import express from 'express';
import customerRouter from "./routers/customers.js"
import employeeBarbersRouter from "./routers/employeeBarbers.js"
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/customers", customerRouter);
app.use("/employee-barbers", employeeBarbersRouter);

const port = 8800;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})