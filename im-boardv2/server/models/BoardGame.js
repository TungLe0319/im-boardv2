import mongoose from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";
const Schema = mongoose.Schema;

export const BoardGameSchema = new Schema(
  {
    name: { type: String, required: true },
    gameId: { type: String, required: true },
    players: { type: String },
    playTime: { type: String },
    type: {
      type: String,
      required: true,
      enum: ["owned", "wish", "favorite", "custom"],
      default: "favorite",
      lowercase: true,
    },
    imgUrl: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    accountId: { type: ObjectId, ref: "Account", required: true },
  },
  SCHEMA_OPTIONS
);

BoardGameSchema.virtual("account", {
  localField: "accountId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});
