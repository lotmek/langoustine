import { FullCard } from "domain/model/card";

export interface ICardService {
  /**
   * Create a card.
   */
  createCard(card: FullCard): Promise<FullCard>;

  /**
   * Retrieve random full cards.
   *
   * @param limit Maximum number of elements
   */
  getRandomFullCards(limit?: number): Promise<FullCard[]>;
}
