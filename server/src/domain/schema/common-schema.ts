import { Schema } from "mongoose";
import { IAudits } from "../model/audits";

export const auditsSchema = new Schema<IAudits>({
  createdAt: {
    type: Date,
    required: true,
  },
  lastModifiedAt: {
    type: Date,
    required: false,
  },
});
