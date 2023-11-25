import { ICardService } from "./card-service.interface";
import { FullCard } from "domain/model/card";
import axios from "axios";

class CardService implements ICardService {
  async createCard(card: FullCard): Promise<FullCard> {
    return axios.post("/v1/cards", card, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getRandomFullCards(): Promise<FullCard[]> {
    const response = await axios.get<FullCard[]>("/v1/cards", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Test images
    // return response.data.map((x) => ({
    //   ...x,
    //   imageUrl:
    //     "https://www.allaboutbirds.org/news/wp-content/uploads/2020/07/STanager-Shapiro-ML.jpg",
    // }));
    return response.data;
  }
}

// Singleton
export const cardService = new CardService();
