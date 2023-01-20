import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
export const GroupMemberSchema = new Schema(
  {
    accountId: { type: ObjectId, ref: "Account", required: true },
    groupId: { type: ObjectId, ref: "Group", required: true },
    isOnline: { type: Boolean, default: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
GroupMemberSchema.index({ groupId: 1, accountId: 1 }, { unique: true });

GroupMemberSchema.virtual("profile", {
  localField: "accountId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

GroupMemberSchema.virtual("group", {
  localField: "groupId",
  foreignField: "_id",
  justOne: true,
  ref: "Group",
});
