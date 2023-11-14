import * as mongoDB from "mongodb";
import init100Cards from "../resources/1.0.0.json";

/**
 * Initialize the database with 100 examples.
 */
export default async (db: mongoDB.Db) => {
  if (!process.env.CARD_COLLECTION_NAME) {
    throw new Error("CARD_COLLECTION_NAME is not defined");
  }
  const cardCollection = db.collection(process.env.CARD_COLLECTION_NAME);

  await cardCollection.insertMany(init100Cards);
  console.log("Successfully added the first hundred cards");
};
