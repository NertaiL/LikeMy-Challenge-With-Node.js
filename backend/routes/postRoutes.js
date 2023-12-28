import express from "express";
import {
  getAllPosts,
  createPosts,
  /* notFound, */
  updateLikes,
  removePost,
} from "../src/controllers/postControllers.js";


const router = express.Router();

router.get("/posts", getAllPosts);
router.post("/posts", createPosts);
router.put("/posts/like/:id",updateLikes);
router.delete("/posts/:id", removePost)
/* router.all("*", notFound); */

export default router;
