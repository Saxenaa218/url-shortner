import { Request, Response } from "express";
import { UrlModel } from "../schema/index.js";

export const deleteShortURL = async (req: Request, resp: Response) => {
  try {
    const url = req.body.url;
    const isDeleted = await UrlModel.deleteMany({
      originalURL: url,
    });
    if (isDeleted.deletedCount) {
      resp.status(200).send({ message: "success!", urlDeleted: url });
    } else {
      resp.status(403).send({ message: "Unable to delete, please try again" });
    }
  } catch (error) {
    resp.status(500).send({ message: "Unable to delete, please try again" });
  }
};
