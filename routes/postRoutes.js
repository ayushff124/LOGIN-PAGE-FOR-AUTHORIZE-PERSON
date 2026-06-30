const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getAllPost, getSinglePost, getMyPost, createPost, updatePost, deletePost } = require("../controllers/postController");

const router = express.Router();

router.get("/allpost", getAllPost)
router.get("/single/:id", getSinglePost);
router.get("/my-post", authMiddleware, getMyPost);
router.post("/create", authMiddleware, createPost);
router.put("/update/:id", authMiddleware, updatePost);
router.delete("/delete/:id", authMiddleware, deletePost);

module.exports = router;