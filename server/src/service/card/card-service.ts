import { boundClass } from "autobind-decorator";
import { ICardService } from "./card-service.interface";
import { FullCard } from "../../domain/model/card";
import { cardRepository } from "../../repository/card/card-repository";

@boundClass
class CardService implements ICardService {
  createCard(card: FullCard): Promise<FullCard> {
    return cardRepository.createCard(card);
  }
}

// Singleton
export const cardService = new CardService();
