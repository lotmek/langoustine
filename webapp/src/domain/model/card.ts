/**
 * Pre-answered card.
 */
export interface SideCard {
  id: string; // ID of the example in the table
  phrase: string;
  phraseExample: string;
  phraseLanguage: string;
  translationLanguage: string;
  imageUrl?: string;
  definition?: string;
}

/**
 * Card with the right answer.
 */
export interface FullCard extends SideCard {
  translation: string;
  translationExample: string;
}