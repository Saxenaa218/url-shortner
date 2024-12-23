import { Request, Response } from "express";
import { UrlModel } from "../schema/index.js";

export const getOriginalUrl = async (req: Request, resp: Response) => {
  const { shortUrlId } = req.params;
  try {
    const shortUrlObject = await UrlModel.findOne(
      {
        shortUrlId,
      },
      {
        originalURL: 1,
        shortUrlId: 1,
        createdAt: 1,
        _id: 0,
      }
    );
    resp.status(200).send({ message: "success!", data: shortUrlObject });
  } catch (error) {
    console.error(error);
    resp.status(500).send({ message: "Unable to fetch all URLs" });
  }
};
