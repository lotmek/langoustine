export interface TranslationExample {
  phraseExample: string;
  translationExample: string;
  exampleSourceUrl?: string;
}

export interface TranslationResult {
  translation: string;
  examples: TranslationExample[];
}

export interface Translation {
  phrase: string;
  definition?: string;
  imageUrl?: string;
  phraseLanguage: string;
  translationLanguage: string;
  results: TranslationResult[];
}
