import mongoose from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";
// import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";
const Schema = mongoose.Schema;

export const GameNightSchema = new Schema(
  {
    groupId: { type: ObjectId, ref: "Group", required: true },
    creatorId: { type: ObjectId, ref: "Account", required: true },
    location: { type: String, required: true, minlength: 1, maxlength: 50 },
    game: { type: String, required: true },
    groupMemberIdsAttending: [
      { type: Object, ref: "GroupMember", required: false },
    ],
    startDate: { type: Date, required: true },
  },
  SCHEMA_OPTIONS
);

GameNightSchema.virtual("group", {
  localField: "groupId",
  foreignField: "_id",
  justOne: true,
  ref: "Group",
});
