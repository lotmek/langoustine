import { boundClass } from "autobind-decorator";
import { ICardService } from "./card-service.interface";
import { FullCard } from "../../domain/model/card";
import { cardRepository } from "../../repository/card/card-repository";
import { DEFAULT_CARDS_LIMIT } from "../../domain/constant/card";

@boundClass
class CardService implements ICardService {
  getRandomFullCards(limit?: number): Promise<FullCard[]> {
    const cardLimit = limit ?? DEFAULT_CARDS_LIMIT;
    return cardRepository.getRandomFullCards(cardLimit);
  }

  createCard(card: FullCard): Promise<FullCard> {
    return cardRepository.createCard(card);
  }
}

// Singleton
export const cardService = new CardService();
