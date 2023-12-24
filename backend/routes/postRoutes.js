import express from "express";
import {
  getAllPosts,
  createPosts,
  notFound,
} from "../src/controllers/postControllers.js";

const router = express.Router();

router.get("/posts", getAllPosts);
router.post("/posts", createPosts);
router.all("*", notFound);

export default router;
