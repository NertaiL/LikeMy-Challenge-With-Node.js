import { getPost, createPost, updatePost,  getPostsById, destroyPost, updatePostAll, } from "../models/postModels.js";


//get posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await getPost(); //en singular laque viene de models
    res.status(200).json({posts: posts});
  } catch (error) {
    next(error)
    /* res.status(500).json({ error: "Internal Server Error - Error processing request" });
    console.error("Internal Server Error - Error processing request:", error); */
  }
};


//get x id
export const getById = async (req,res,next) =>{
  try {
    const {id} = req.params; //ver validacion de si no tiene id
    if(!id){
      console.log("Id not found");
      res.status(400).json({error: "Id not found"})
      return
    }

    const readBy1 = await getPostsById(id)

    if(!readBy1 || readBy1.length === 0){
      console.log(`Post with ID ${id} not found`);
      res.status(404).json({error:`Post with ID ${id} not found`})
      return
    }
    res.status(200).json({postsById: readBy1})
  } catch (error) {
    next(error)
  }
}


//posts create
export const createPosts = async (req, res,next) => {
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
    res.status(201).json({message:"post has been successfully created", newPost}); 
  } catch (error) {
    next(error)
  }
};


//put update touch the heart +1
export const updateLikes = async (req,res,next) =>{
try {
  const {id} = req.params;
  const newUpdate = await updatePost(id)
  if(newUpdate === 0){
    res.status(404).json({message: "I don't increase the number of likes"})
    return
  }
  res.status(201).json({message: "you gave it a like"})
  console.log("you gave it a like");
} catch (error) {
  next(error)
}
}

//put update register
export const updateAlls = async (req,res,next) =>{
  try {
    const {id} = req.params
    const {titulo,url,descripcion,likes} = req.body
    const newUpdateAll = await updatePostAll(id,titulo,url,descripcion,likes)
    res.status(201).json({message:"Registration successfully updated", newUpdateAll})
  } catch (error) {
    next(error)
  }
}


//delete
export const removePosts = async (req,res,next) =>{
  
  try {
    const {id} = req.params
    const deletePost = await destroyPost(id) //el nobmre de los modelos tiene que ser en singular
    if (deletePost === 0) {
      return res.status(404).json({message: "No existe el registro "})
    }
    res.status(200).json({message: "Registro eliminado exitosamente"})// aqui no podemos retornar newRemovePost , yaque como eliminamos el registro no nos va a llegar nada
  } catch (error) {
    next(error)
  }
}


//por si ingresan una ruta no existente
export const notFound = async (req, res) => {
  res.status(404).json({ error: "This request is not possible" });
};