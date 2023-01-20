import mongoose from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";
const Schema = mongoose.Schema;

export const GroupChatSchema = new Schema(
  {
    groupId: { type: ObjectId, ref: "Group", required: true },
    creatorId: { type: ObjectId, ref: "Account", required: true },
    body: { type: String, required: true, minlength: 1, maxlength: 500 },
  },
  SCHEMA_OPTIONS
);

GroupChatSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});
