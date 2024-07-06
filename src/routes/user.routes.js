import { Router } from "express";
<<<<<<< HEAD
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
=======
import registerUser from "../controllers/user.controller.js";
const router = Router();

router.route("/register").post(registerUser);
>>>>>>> origin/main

export default router;
