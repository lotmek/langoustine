import { Language } from "../enum/language";

/**
 * Pre-answered card.
 */
export interface SideCard {
  id?: string; // ID of the example in the table
  input: string;
  inputLanguage: string;
  inputExample: string;
  inputDefinition?: string;
  outputLanguage: Language;
  imageUrl?: string;
}

/**
 * Card with the right answer.
 */
export interface FullCard extends SideCard {
  output: string;
  outputExample: string;
}
