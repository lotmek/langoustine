import { FullCard } from "../../domain/model/card";

export interface ICardRepository {
  /**
   * Create a card with audits in the database.
   */
  createCard(card: FullCard): Promise<FullCard>;
}
