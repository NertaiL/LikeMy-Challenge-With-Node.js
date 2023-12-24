import express from "express";
import cors from "cors";
import { logger } from "logger-express";
import postRoutes from "./routes/postRoutes.js";
import { notFound } from "./src/controllers/postControllers.js";

const PORT = process.env.PORT || 3000;
const app = express();


//middleware
app.use(express.json());
app.use(cors()); 
app.use(logger()); 
app.use(postRoutes);
app.use("*", notFound);

//server raised
app.listen(PORT, () => {
  console.log(`🔥 Server on 🔥 http://localhost:${PORT}`);
});
