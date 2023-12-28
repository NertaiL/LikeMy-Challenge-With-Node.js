import express from "express";
import cors from "cors";
import { logger } from "logger-express";
import postRoutes from "./routes/postRoutes.js";
/* import { notFound } from "./src/controllers/postControllers.js"; */

const PORT = process.env.PORT || 3000;
const app = express(); //Aca tenemos una instancia de express que seria app


//middleware
app.use(express.json());//nos permite parsear el cuerpo de la consulta 
app.use(cors()); 
app.use(logger()); //nos avisa en la terminal, los get, put, delete etcc y nos avisa algunos errores que podamos tener y tambien nos da una carpeta de logs con todos los get y putetc realizadads aguantando hasta 5gb y luego se resetea dejando los 10 ultimos
app.use(postRoutes);//Aqui estamos importando todas las rutas creadas en postRoutes en server.js
/* app.use("*", notFound); */

//server raised 
app.listen(PORT, () => { //aqui levantamos el puerto en 3mil
  console.log(`🔥 Server on 🔥 http://localhost:${PORT}`);
});
