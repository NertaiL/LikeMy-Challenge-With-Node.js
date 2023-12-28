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

//put
export const updatePost = async (id) =>{
  try {
    const SQLquery ={
      text: "UPDATE posts SET likes = likes + 1 WHERE id = $1",
      values: [id]
    }
    const response = await pool.query(SQLquery);
    return response.rows
  } catch (error) {
    console.log(error);
  }
}

//delete
export const deletePost = async (id) =>{
  try {
    const SQLquery={
      text: "DELETE FROM posts WHERE id = $1",
      values: [id]
    }
    const response = await pool.query(SQLquery)
    return response.rows
  } catch (error) {
    console.log(error);
  }
}