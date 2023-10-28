import mongoose from "mongoose";

/**
 * Initialize Mongoose.
 */
export function initMongoose() {
  const dbUrl = process.env.DB_URL;
  if (dbUrl) {
    mongoose
      .connect(dbUrl)
      .then(() => {
        console.log("Connected to database");
      })
      .catch((err) => {
        console.log("An issue occured when connecting to the database: " + err);
        throw err;
      });
  } else {
    throw new Error("Database URL was not provided.");
  }
}
