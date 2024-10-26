import express from 'express';
import cors from 'cors';

// Imports for HomeWebSite
import loginAdminRouter from "./routers/forHomeWebSite/loginAdmin.router.js"
import customersRouter from "./routers/forHomeWebSite/customers.router.js";
import employeeBarbersRouter from "./routers/forHomeWebSite/employeeBarbers.router.js";
import monthlyPlansRouter from "./routers/forHomeWebSite/monthlyPlans.router.js";
import servicesLeftRouter from "./routers/forHomeWebSite/servicesLeft.router.js";
import servicesRightRouter from "./routers/forHomeWebSite/servicesRight.router.js";
import addressRouter from "./routers/forHomeWebSite/address.router.js"
import telephoneRouter from "./routers/forHomeWebSite/telephone.router.js"
import socialMediaRouter from "./routers/forHomeWebSite/socialMedia.router.js"
import openingHoursRouter from "./routers/forHomeWebSite/opening_hours.router.js"
// Imports for AdminSection
import managementAddressRouter from "./routers/forAdminSection/managementAdmin.router.js"

const app = express();

app.use(express.json());
app.use(cors());

// App use for HomeWebSite
app.use("/admin/login", loginAdminRouter);
app.use("/customers", customersRouter);
app.use("/employee-barbers", employeeBarbersRouter);
app.use("/monthly-plans", monthlyPlansRouter);
app.use("/services-left", servicesLeftRouter);
app.use("/services-right", servicesRightRouter);
app.use("/address", addressRouter);
app.use("/telephone", telephoneRouter);
app.use("/social-media", socialMediaRouter);
app.use("/opening-hours", openingHoursRouter);
// App use for AdminSection
app.use("/admin/management", managementAddressRouter);

const port = 8800;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})