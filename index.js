import express from "express";
import cors from "cors";
import { getTableData } from "./src/controllers/tableControllers.js";

const app = express();
const port = 3000;

// Settear para el uso de JSON
app.use(express.json());
app.use(cors());

app.get("/libro-matriz", getTableData);

app.listen(port, () => console.log(`Server listening on port ${port}`));
