/**
 * Pre-answered card.
 */
export interface SideCard {
  id?: string; // ID of the example in the table
  phrase: string;
  phraseDefinition?: string;
  phraseExample: string;
  phraseLanguage: string;
  translationLanguage: string;
  imageUrl?: string;
}

/**
 * Card with the right answer.
 */
export interface FullCard extends SideCard {
  translation: string;
  translationExample: string;
}
