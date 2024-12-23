import { Router } from "express";
import { createShortURL } from "../controllers/createShortURL.js";
import { deleteShortURL } from "../controllers/deleteShortURL.js";
import { getAllShortURLs } from "../controllers/getAllShortURLs.js";
import { getOriginalUrl } from "../controllers/getOriginalUrl.js";

export const router = Router();

router.get("/allUrls", getAllShortURLs);
router.get("/url/:shortUrlId", getOriginalUrl);
router.post("/url", createShortURL);
router.delete("/url", deleteShortURL);
