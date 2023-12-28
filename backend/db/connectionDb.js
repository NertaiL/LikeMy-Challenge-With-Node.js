import "dotenv/config";
import  pg  from "pg";
//import { Pool } from "pg"" AQUI ME ESTOY EXTRAYENDO Pool de pg, entonces aqui seria const pool = new Pool({;

const pool = new pg.Pool({ //pero como aca llamamos ala libreria pg entonces extraemos pg.Pool para extraer Pool, es lo mismo pero de diferente forma de hacerlo.
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    port : process.env.DB_PORT, 
    //
    allowExitOnIdle: true, //Estoa propiedad le va  decir a postgres que cierre la conexion luego de cada consulta
})

export default pool;

try {
    await pool.query("SELECT NOW()"); //SELECT NOW() ES PARA DEJAR REGISTRADO A QUE HORA SE REALIZO LA CONSULTA EN POSTGRES
    console.log("Database connected"); // Y BUENO ESTO ES PARA VER QUE LA DATABASE ESTE CONECTADA
} catch (error) {
    console.error("Error connecting to database:", error);
}

//pool.on("connect", () => console.log("✔ DB connected"));



