import mongoose from "mongoose";
import { FullCard } from "domain/model/card";
import { Language } from "domain/enum/language";
import { auditsSchema } from "./common-schema";
import { Audited } from "domain/model/audits";

const cardSchema = new mongoose.Schema<Audited<FullCard>>({
  id: {
    type: String,
  },
  input: {
    type: String,
    required: true,
  },
  inputLanguage: {
    type: String,
    enum: Object.values(Language),
    required: true,
  },
  inputExample: {
    type: String,
    required: true,
  },
  inputDefinition: {
    type: String,
  },
  output: {
    type: String,
    required: true,
  },
  outputLanguage: {
    type: String,
    enum: Object.values(Language),
    required: true,
  },
  outputExample: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  audits: auditsSchema,
});

export const cardModel = mongoose.model("Card", cardSchema);
