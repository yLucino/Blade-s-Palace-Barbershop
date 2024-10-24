import express from 'express';
import cors from 'cors';

import loginAdminRouter from './api/loginAdmin.js';

import customersRouter from "./routers/customers.router.js";
import employeeBarbersRouter from "./routers/employeeBarbers.router.js";
import monthlyPlansRouter from "./routers/monthlyPlans.router.js";
import servicesLeftRouter from "./routers/servicesLeft.router.js";
import servicesRightRouter from "./routers/servicesRight.router.js";
import addressRouter from "./routers/address.router.js"
import telephoneRouter from "./routers/telephone.router.js"
import socialMediaRouter from "./routers/socialMedia.router.js"
import openingHoursRouter from "./routers/opening_hours.router.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", loginAdminRouter);

app.use("/customers", customersRouter);
app.use("/employee-barbers", employeeBarbersRouter);
app.use("/monthly-plans", monthlyPlansRouter);
app.use("/services-left", servicesLeftRouter);
app.use("/services-right", servicesRightRouter);
app.use("/address", addressRouter);
app.use("/telephone", telephoneRouter);
app.use("/social-media", socialMediaRouter);
app.use("/opening-hours", openingHoursRouter);

const port = 8800;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})