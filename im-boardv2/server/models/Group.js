import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
export const GroupSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 50, minlength: 1 },
    groupMemberIds: [{ type: Object, ref: "GroupMember", require: false }],
    coverImg: {
      type: String,
      required: true,
      default:
        "https://roomescapedc.com/wp-content/uploads/2021/01/board-games-background-min-1920x1078.jpg",
    },
    creatorId: { type: ObjectId, ref: "Account", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

GroupSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});
