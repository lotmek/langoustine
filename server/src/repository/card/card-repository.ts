import { boundClass } from "autobind-decorator";
import { ICardRepository } from "./card-repository.interface";
import { BaseRepository } from "../base-repository";
import { FullCard } from "domain/model/card";
import { cardModel } from "domain/schema/card-schema";

@boundClass
class CardRepository extends BaseRepository<FullCard> implements ICardRepository {
  public async getRandomFullCards(limit: number): Promise<FullCard[]> {
    try {
      return cardModel.aggregate([{ $sample: { size: limit } }]).exec();
    } catch (err) {
      console.log("Error while retrieving random full cards: ", err);
      throw new Error("An error occurred while retrieving random full cards in the database.");
    }
  }

  public async createCard(card: FullCard): Promise<FullCard> {
    // Add audits
    const cardToCreate = this.buildAuditedValue(card);

    try {
      const createdCard = await cardModel.create(cardToCreate);
      return this.buildAuditLessValue(createdCard);
    } catch (err) {
      console.log("Error while creating the card: ", err);
      throw new Error("An error occurred while creating the card in the database.");
    }
  }
}

// Singleton
export const cardRepository = new CardRepository();
