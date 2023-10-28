import mongoose from "mongoose";
import { FullCard } from "../model/card";
import { Language } from "../enum/language";

const cardSchema: mongoose.Schema<FullCard> = new mongoose.Schema({
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
});

export const cardModel = mongoose.model("Card", cardSchema);
