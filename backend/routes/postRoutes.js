import express from "express";
import {
  getAllPosts,
  createPosts,
  notFound,
  updateLikes,
  getById,
  removePosts,
  updateAlls,
} from "../src/controllers/postControllers.js";


const router = express.Router();

router.get("/api/v1/posts", getAllPosts); 
router.get("/api/v1/posts/:id", getById)
router.post("/api/v1/posts", createPosts);
router.put("/api/v1/posts/like/:id",updateLikes);
router.put("/api/v1/posts/:id", updateAlls)
router.delete("/api/v1/posts/:id", removePosts)
router.all("*", notFound);

export default router;
