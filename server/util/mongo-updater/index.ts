import * as mongoDB from "mongodb";
import dotenv from "dotenv";
import path from "path";
import { compareVersions, getFileVersion, getSortedVersionFiles } from "./file";

dotenv.config();

/**
 * Function to update the test database
 */
async function updateTestDb() {
  // Check if MongoDB environment variables are defined
  if (!process.env.DB_CONN_URL) {
    throw new Error("MongoDB connection URL is not defined");
  } else if (!process.env.TEST_COLLECTION_NAME) {
    throw new Error("The name of the testing config collection is not defined");
  }

  // Access the database
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_URL);
  await client.connect().catch((error) => {
    console.error(`Error while connection to MongoDB: ${error}`);
  });

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const testConfigCollection: mongoDB.Collection = db.collection(process.env.TEST_COLLECTION_NAME);

  // Find the existing configuration document or create a new one
  let config: mongoDB.WithoutId<mongoDB.BSON.Document> | null =
    await testConfigCollection.findOne();

  if (!config) {
    config = await testConfigCollection.insertOne({ version: "0.0.0" });
  }

  let currentVersion: string = config.version;

  // Get a sorted list of version files from the versions directory
  const versionPath = path.resolve(__dirname, "./versions");
  const versionFiles = getSortedVersionFiles(versionPath);

  // Import and execute functions in order
  for (const file of versionFiles) {
    if (compareVersions(currentVersion, file) >= 0) {
      console.log(`Skipping updater ${file}`);
      continue;
    }

    try {
      const module = await import(path.resolve(versionPath, file));
      if (module.default && typeof module.default === "function") {
        await module.default(db);
        console.log(`Updater ${file} executed successfully.`);

        currentVersion = getFileVersion(file) ?? currentVersion;
        await testConfigCollection.updateOne(
          { _id: config._id },
          {
            $set: {
              version: currentVersion,
            },
          }
        );
      } else {
        console.error(`No valid default export in ${file}.`);
      }
    } catch (error) {
      console.error(`Error executing ${file}: ${error}`);
    }
  }
}

updateTestDb();
