import mongoose from "mongoose";
import { ObjectId } from "../db/DbUtils.js";
const Schema = mongoose.Schema;

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    coverImg: { type: String },
    // inbox: [{ type: Object, required: false, ref: 'Inbox' }],
    bio: { type: String },
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
