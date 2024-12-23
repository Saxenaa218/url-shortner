import { Request, Response } from "express";
import { UrlModel } from "../schema/index.js";

export const getAllShortURLs = async (req: Request, resp: Response) => {
  try {
    const allShortUrls = await UrlModel.find(
      {},
      {
        originalURL: 1,
        shortUrlId: 1,
        createdAt: 1,
        _id: 0,
      }
    );
    resp.status(200).send({ message: "success!", data: allShortUrls });
  } catch (error) {
    resp.status(500).send({ message: "Unable to fetch all URLs" });
  }
};
