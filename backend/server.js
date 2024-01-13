import express from "express";
import cors from "cors";
import { logger } from "logger-express";
import postRoutes from "./routes/postRoutes.js";
import { notFound } from "./src/controllers/postControllers.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express(); //Aca tenemos una instancia de express que seria app


//middleware
app.use(express.json());//nos permite parsear el cuerpo de la consulta 
app.use(cors()); //Aqui habilitamos el cors, para que se conecte el backend con el frontend
app.use(logger()); //nos avisa en la terminal, los get, put, delete etcc y nos avisa algunos errores que podamos tener y tambien nos da una carpeta de logs con todos los get y putetc realizadads aguantando hasta 5gb y luego se resetea dejando los 10 ultimos
app.use(postRoutes);//Aqui estamos importando todas las rutas creadas en postRoutes en server.js
app.use("*", notFound);

/* app.use((err,req,res,next)=>{
  return res.status(500).json({
    status: "error",
    message: err.message
  })
}) */

app.use((err, req, res, next) => {
  // Personaliza el mensaje de error según tus necesidades
  const errorMessage = "Internal Server Error - Error processing request";

  // Loguea el error
  console.error("Internal Server Error - Error processing request:", err);

  // Responde con el mensaje de error y el código de estado 500
  return res.status(500).json({
    status: "error",
    message: errorMessage,
  });
});

//server raised 
app.listen(PORT, () => { //aqui levantamos el puerto en 3mil
  console.log(`🔥 Server on 🔥 http://localhost:${PORT}`);
});
