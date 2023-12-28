import { getPosts, createPost, updatePost, deletePost } from "../models/postModels.js";


//get posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await getPosts(); //en singular laque viene de models
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error processing request" });
    console.error("Error processing request", error);
  }
};


//posts create
export const createPosts = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;

    if (!titulo && !url && !descripcion) {
        console.log("All fields are required");
        res.status(400).json({ error: "All fields are required" });
        return;
      }
  
      if (!titulo) {
        console.log("Title is required");
        res.status(400).json({ error: "Title is required" });
        return;
      }
  
      if (!url) {
        console.log("URL is required");
        res.status(400).json({ error: "URL is required" });
        return;
      }
  
      if (!descripcion) {
        console.log("Description is required");
        res.status(400).json({ error: "Description is required" });
        return;
      }

    const newPost = await createPost(titulo, url, descripcion); 
    res.status(201).json(newPost); 
  } catch (error) {
    res.status(500).json({ error: "Error processing request" });
    console.error("Error processing request:", error);
  }
};


//put
export const updateLikes = async (req,res) =>{
try {
  const{id} = req.params;
  const {like} = req.body
  const newUpdate = await updatePost(id,like)
  res.status(201).json(newUpdate)
} catch (error) {
  res.status(500).json({ error: "Error processing request" });
  console.error("Error processing request:", error);
}
}

//delete
export const removePost = async (req,res) =>{
  try {
    const {id} = req.params
    const newRemovePost = await deletePost(id)
    res.status(204).json(newRemovePost)
  } catch (error) {
    res.status(500).json({ error: "Error processing request" });
  console.error("Error processing request:", error);
  }
}



/* export const notFound = async (req, res) => {
  res.status(500).json({ error: "This request is not possible" });
  console.error("This request is not possible", error);
}; */