import pool from "../../db/connectionDb.js";

//get
export const getPosts = async () => {
  const SQLquery = { text: "SELECT * FROM posts" };
  try {
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.log(error);
  }
};

//post
export const createPost = async (titulo, url, descripcion) => {
  try {
    const SQLquery = {
      text: "INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1,$2,$3,$4) RETURNING *",
      values: [titulo, url, descripcion, 0],
    };
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.log(error);
  }
};
