import express from "express";
import cors from "cors";

import KasirRoute from "./routes/kasirRoutes.js";
import TenanRoute from "./routes/tenanRoutes.js";
import BarangRoute from "./routes/barangRoutes.js";
import NotaRoute from "./routes/notaRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(KasirRoute);
app.use(TenanRoute);
app.use(BarangRoute);
app.use(NotaRoute);

app.listen(3000, ()=> console.log('Server up and running...'));