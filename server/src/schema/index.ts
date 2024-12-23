import { model, Schema } from "mongoose";

const urlSchema = new Schema({
  originalURL: {
    type: String,
    required: true,
  },
  shortUrlId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

export const UrlModel = model("urls", urlSchema);
