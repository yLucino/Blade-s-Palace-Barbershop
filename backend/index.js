import express from 'express';
import cors from 'cors';

import loginAdminRouter from './api/loginAdmin.js';

import customersRouter from "./routers/customers.router.js";
import employeeBarbersRouter from "./routers/employeeBarbers.router.js";
import monthlyPlansRouter from "./routers/monthlyPlans.router.js";
import servicesRouter from "./routers/services.router.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", loginAdminRouter);

app.use("/customers", customersRouter);
app.use("/employee-barbers", employeeBarbersRouter);
app.use("/monthly-plans", monthlyPlansRouter);
app.use("/services", servicesRouter);

const port = 8800;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})