import mongoose from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";
const Schema = mongoose.Schema;

export const InboxSchema = new Schema(
  {
    groupId: { type: ObjectId, ref: "Group", required: true },
    senderId: { type: ObjectId, ref: "Account", required: true },
    recipientId: { type: ObjectId, ref: "Account", required: true },
    description: { type: String, required: true, minlength: 1, maxlength: 500 },
  },
  SCHEMA_OPTIONS
);

InboxSchema.virtual("sender", {
  localField: "senderId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

InboxSchema.virtual("recipient", {
  localField: "recipientId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

InboxSchema.virtual("group", {
  localField: "groupId",
  foreignField: "_id",
  justOne: true,
  ref: "Group",
});
