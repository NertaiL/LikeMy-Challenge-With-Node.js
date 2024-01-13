import pool from "../../db/connectionDb.js";

//get
export const getPost = async () => {
  const SQLquery = { text: "SELECT * FROM posts" };
  const response = await pool.query(SQLquery);
  return response.rows;
};


//get by id
export const getPostsById = async (id) => {
  const SQLquery = {
    text: `SELECT * FROM posts WHERE id = $1`,
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};


//post
export const createPost = async (titulo, url, descripcion) => {
  const SQLquery = {
    text: "INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1,$2,$3,$4) RETURNING *",
    values: [titulo, url, descripcion, 0],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0]; //0 para que me devuelva solo el objeto y no el array
};


//put touch heart
export const updatePost = async (id) => {
  const SQLquery = {
    text: "UPDATE posts SET likes = likes + 1 WHERE id = $1",
    values: [id],
  };
  const response = await pool.query(SQLquery);
  return response.rows; 
};


//put all
export const updatePostAll = async (id,titulo, url, descripcion,likes) =>{
  const SQLquery = {
    text: "UPDATE posts SET titulo = $2, img = $3, descripcion = $4, likes = $5 WHERE id = $1 RETURNING *",
    values: [id,titulo,url,descripcion,likes]
  }
  const response =  await pool.query(SQLquery)
  return response.rows[0];
}


//delete
export const destroyPost = async (id) => {
  const SQLquery = {
    text: "DELETE FROM posts WHERE id = $1",
    values: [id],
  };
  const response = await pool.query(SQLquery); 
  return response.rowCount;
};
