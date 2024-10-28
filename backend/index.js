import express from 'express';
import cors from 'cors';

// Imports for HomeWebSite
import homeWebSiteRouter from "./routers/forHomeWebSite/homeWebSite.router.js"
// Imports for AdminSection
import managementAddressRouter from "./routers/forAdminSection/managementAdmin.router.js"

const app = express();

app.use(express.json());
app.use(cors());

// App use for HomeWebSite
app.use("/", homeWebSiteRouter);
// App use for AdminSection
app.use("/admin/management", managementAddressRouter);

const port = 8800;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})