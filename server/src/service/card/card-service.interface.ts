import { FullCard } from "../../domain/model/card";

export interface ICardService {
  /**
   * Create a card.
   */
  createCard(card: FullCard): Promise<FullCard>;
}
