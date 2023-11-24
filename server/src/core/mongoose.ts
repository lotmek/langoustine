import mongoose from "mongoose";

/**
 * Initialize Mongoose.
 */
export function initMongoose() {
  const dbConnUrl = process.env.DB_CONN_URL;
  const dbName = process.env.DB_NAME;

  if (dbConnUrl && dbName) {
    mongoose
      .connect(`${dbConnUrl}/${dbName}`)
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
