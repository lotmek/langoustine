export interface TranslationExample {
  sourceExample: string;
  targetExample: string;
  exampleUrl?: string;
}

export interface TranslationResult {
  translation: string;
  examples: TranslationExample[];
}

export interface Translation {
  expression: string;
  definition?: string;
  imageUrl?: string;
  sourceLanguage: string;
  targetLanguage: string;
  results: TranslationResult[];
}
