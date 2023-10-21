import { Language } from "domain/enum/language";

/**
 * Pre-answered card.
 */
export interface SideCard {
  id?: string; // ID of the example in the table
  input: string;
  inputDefinition?: string;
  inputExample: string;
  inputLanguage: string;
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
