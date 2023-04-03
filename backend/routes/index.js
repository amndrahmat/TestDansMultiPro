import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  getUserById,
  jobList,
  jobListID,
  jobListSearch,
} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
const router = express.Router();

router.get("/webapi/v1/users", verifyToken, getUsers);
router.post("/webapi/v1/users", Register);
router.post("/webapi/v1/login", Login);
router.get("/webapi/v1/token", refreshToken);
router.delete("/webapi/v1/logout", Logout);
router.post("/webapi/v1/userbyid", verifyToken, getUserById);
router.get("/webapi/v1/joblist", jobList);
router.get(`/webapi/v1/joblistId`, jobListID);
router.get(`/webapi/v1/joblistseach`, jobListSearch);

export default router;
