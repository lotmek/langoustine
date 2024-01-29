import mongoose from "mongoose";
import { auditsSchema } from "./common-schema";
import { Audited } from "domain/model/audits";
import { User } from "domain/model/user";

const userSchema = new mongoose.Schema<Audited<User>>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  audits: auditsSchema,
});

export const userModel = mongoose.model("User", userSchema);
