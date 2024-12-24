import { Request, Response } from "express";
import { UrlModel } from "../schema/index.js";
import { nanoid } from "nanoid";

export const createShortURL = async (req: Request, resp: Response) => {
  const url = req.body.url;

  if (!url) {
    resp.status(400).send({ message: "URL is required" });
    return;
  }

  const found = await UrlModel.find({
    originalURL: url,
  });

  if (found.length > 0) {
    resp.status(200).send({ message: "success!", data: found[0] });
    return;
  }

  const urlObj = await UrlModel.create({
    originalURL: url,
    shortUrlId: nanoid(6),
    createdAt: new Date(),
  });

  resp.status(200).send({ message: "success!", data: urlObj });
};
