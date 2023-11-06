import { ICardService } from "./card-service.interface";
import { FullCard } from "domain/model/card";
import axios from "axios";

class CardService implements ICardService {
  createCard(card: FullCard): Promise<FullCard> {
    return axios.post("/cards", card, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// Singleton
export const cardService = new CardService();
